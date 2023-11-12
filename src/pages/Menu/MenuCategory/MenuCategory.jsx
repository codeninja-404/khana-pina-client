import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="pt-8 mb-10">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 m-2 my-16 md:mx-10 ">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link
          to={`/order/${title}`}
          className="btn   text-white px-10  btn-ghost border-b-black border-b-4 bg-black  bg-opacity-60 hover:bg-black hover:bg-opacity-60 hover:border-b-red-500  border-0"
        >
          order your favorite food
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
