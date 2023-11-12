const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div>
      <div className="card mx-auto rounded-none h-full  w-80 my-2 bg-yellow-100 shadow-xl">
        
        <figure>
          <img src={image} alt="food" className="w-full"/>
        </figure>
        <p className="bg-slate-900 mr-4 mt-4 text-white px-4 py-1 rounded-lg absolute right-0">$ {price}</p>
       
        <div className=" pt-4 px-4  text-center">
          <h2 className="uppercase block py-2 font-bold text-xl">{name}</h2>
          <p className="">{recipe }</p>
          <div className="card-actions justify-center ">
            <button className="btn text-white px-7 mt-6 btn-ghost border-b-orange-500 border-b-4 bg-black  bg-opacity-60 hover:bg-black  hover:border-b-red-700  border-0">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
