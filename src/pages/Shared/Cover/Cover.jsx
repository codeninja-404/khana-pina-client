import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <div className="">
      <Parallax
        blur={{ min: 50, max: -80 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={200}
      >
        <div
          className="hero h-[300px] md:h-[600px]"
          // style={{
          //   backgroundImage: `url("${img}")`,
          // }}
        >
          <div className=" bg-opacity-60 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="bg-black md:w-3/4 bg-opacity-60 py-3 px-2  md:py-10 md:px-8 lg:py-24 lg:px-20 ">
              <h1 className="md:mb-5 text-3xl md:text-5xl font-bold uppercase">
                {title}
              </h1>
              <p className="md:mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
