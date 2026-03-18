const Heading = ({ text, className, description }) => {
  return (
    <div className={` ${className} ${description && "flex flex-col"}`}>
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        {text}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
