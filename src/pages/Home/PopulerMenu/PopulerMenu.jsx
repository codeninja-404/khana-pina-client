
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopulerMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const populerItems = data.filter((item) => item.category === "popular");
  //       setMenu(populerItems);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-20">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4 m-2">
        {popular?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn  text-white px-10 mt-6 btn-ghost border-b-black border-b-4 bg-black  bg-opacity-50 hover:bg-black hover:bg-opacity-60 hover:border-b-red-500  border-0">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopulerMenu;
