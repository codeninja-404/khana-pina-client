import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { BsFillTrashFill } from "react-icons/bs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalprice = cart.reduce((sum, item) => sum + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YES",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Your file has been deleted.", "", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-4xl">Items : {cart.length}</h2>
        <h2 className="text-4xl">Total price : $ {totalprice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-sm btn-outline shadow-black shadow-md">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn btn-sm btn-outline shadow-black shadow-md"
          >
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto rounded-t-xl my-5">
        <table className="table  w-full ">
          {/* head */}
          <thead className="bg-slate-200  ">
            <tr className=" text-center">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id} className=" text-center">
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
                <td>
                  <p className="font-bold">{item.name}</p>
                </td>
                <td>$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn bg-gray-500  hover:bg-red-500  text-lg text-white btn-xs"
                  >
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
