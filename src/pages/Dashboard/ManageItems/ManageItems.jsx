import { BsFillTrashFill } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount) {
          refetch();
          Swal.fire("Your file has been deleted.", "", "success");
        }
      }
    });
  };
  return (
    <div>
      <SectionTitle
        heading={"Manage all items"}
        subHeading={"Hurry up"}
      ></SectionTitle>

      <div>
        <div className="overflow-x-auto ">
          <table className="table w-full ">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th>#</th>

                <th>Image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {menu?.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <th>
                    <button className="btn bg-green-500  hover:bg-green-600  text-lg text-white btn-sm">
                      <GrDocumentUpdate />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn bg-gray-500  hover:bg-red-500  text-lg text-white btn-sm"
                    >
                      <BsFillTrashFill />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
