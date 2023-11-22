import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, recipe, price, _id } = useLoaderData();
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
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

      if (menuRes.data.modifiedCount > 0) {
        Swal.fire("Your Item Is Updated.", "", "success");
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Add new info"}
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
              defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
                type="number"
                step="0.000001"
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
              defaultValue={recipe}
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
            Update menu Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
