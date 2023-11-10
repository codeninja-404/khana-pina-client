

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-10 md:w-5/12 px-6 mx-auto">
            <p className="text-orange-500 text-lg mb-6  my-2 italic ">--- {subHeading} ---</p>
            <h3 className="text-3xl font-semibold  uppercase border-y-2  border-gray-400 py-4">{heading}</h3>

        </div>
    );
};

export default SectionTitle;