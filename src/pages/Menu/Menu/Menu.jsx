import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";


import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Khana-Pina | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover  */}


      <SectionTitle
        heading={"Today's offer"}
        subHeading={"Don't miss"}
      ></SectionTitle>

      {/* offer mmenu */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"dessert"} coverImg={dessertImg}></MenuCategory>
      {/* pizza menu item */}

      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>
      {/* salads menu items */}
      <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
      {/* soup menu itmes */}
      <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;
