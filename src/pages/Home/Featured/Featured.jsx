import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div
      className="my-20  featured-item bg-fixed  text-gray-100  "
    //   style={{
    //     backgroundImage: `url(${featured})`,
    //     
    //   }}
    >
     <div className="bg-black pt-2 bg-opacity-60">
     <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 ">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn px-10 mt-6 btn-ghost border-b-white border-b-4 bg-black  bg-opacity-60 hover:bg-black hover:bg-opacity-60 hover:border-b-red-500  border-0">
            {" "}
            READ MORE
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Featured;
