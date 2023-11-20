import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
  
    // image upload and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // post the data with menu details info to database via server
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipie,
        image: res.data.data.display_url,
      };
      //   only admin can add item so it will be secure post
      const menuRes = await axiosSecure.post("/menu", menuItem);
      
      if (menuRes.data.insertedId) {
        Swal.fire("Your Item added.", "", "success");
      }
    }
    
  };

  return (
    <div>
      <SectionTitle
        subHeading="What's new"
        heading="Add an Item"
      ></SectionTitle>
      <div className="bg-gray-200 px-5 py-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Recipie name *</span>
            </label>
            <input
              {...register("name")}
              required
              type="text"
              placeholder="Recipie name"
              className="input input-bordered w-full "
            />
          </div>

          <div className="md:flex gap-6">
            <div className="md:flex-1">
              <label className="label">
                <span className="label-text">Category *</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("category")}
                required
              >
                <option disabled>Select a Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full md:flex-1">
              <label className="label">
                <span className="label-text">Price *</span>
              </label>
              <input
                {...register("price")}
                required
                type="number"
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipie Details *</span>
            </label>
            <textarea
              {...register("recipie")}
              required
              className="textarea textarea-bordered h-24"
              placeholder="Recipie Details"
            ></textarea>
            <input
              {...register("image")}
              required
              type="file"
              className="file-input  w-full max-w-xs my-6"
            />
          </div>

          <button
            className="btn bg-yellow-600 text-white  hover:bg-yellow-500"
            type="submit"
          >
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
