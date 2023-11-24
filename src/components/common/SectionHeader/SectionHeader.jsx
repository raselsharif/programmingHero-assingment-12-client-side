

const SectionHeader = ({heading, subHeading}) => {
    return (
        <div className="text-center my-4 ">
            <h3 className="capitalize text-green-600">---{subHeading}---</h3>
            <h2 className="mt-2 font-semibold text-4xl capitalize">{heading}</h2>
        </div>
    );
};

export default SectionHeader;