const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex gap-2">
      
      <img className="w-[110px] h-[90px]  rounded-r-full rounded-bl-full " src={image} alt="" />
      
      <div>
        <h3 className="uppercase">{name} ---------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-orange-500">${price}</p>
    </div>
  );
};

export default MenuItem;
