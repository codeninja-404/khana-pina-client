import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid w-96 sm:w-auto px-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
