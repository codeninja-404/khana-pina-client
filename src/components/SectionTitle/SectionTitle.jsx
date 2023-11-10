

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10 md:w-6/12 px-6 mx-auto">
            <p className="text-orange-500 text-l md:text-2xl my-2 ">--- {subHeading} ---</p>
            <h3 className="text-3xl font-semibold md:text-5xl uppercase border-y-2 md:border-y-4 border-gray-400 py-4">{heading}</h3>

        </div>
    );
};

export default SectionTitle;