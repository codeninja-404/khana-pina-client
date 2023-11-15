import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (food) => {
    if (user && user?.email) {
      //TODO:  send cart item to the database
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to access this feature.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LOG IN",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    console.log(food, user.email);
  };
  return (
    <div>
      <div className="card  rounded-none h-full my-2 bg-yellow-100 shadow-xl">
        <figure>
          <img src={image} alt="food" className="w-full" />
        </figure>
        <p className="bg-slate-900 mr-4 mt-4 text-white px-4 py-1 rounded-lg absolute right-0">
          $ {price}
        </p>

        <div className="card-body  pt-4 px-4  text-center">
          <h2 className="uppercase block py-2 font-bold text-xl">{name}</h2>
          <p className="">{recipe}</p>
          <div className="card-actions justify-center ">
            <button
              onClick={() => {
                handleAddToCart(item);
              }}
              className="btn text-white px-7  btn-ghost border-b-orange-500 border-b-4 bg-black  bg-opacity-60 hover:bg-black  hover:border-b-red-700  border-0"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
