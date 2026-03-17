const Button = ({ className, text, icon }) => {
  return (
    <div
      className={`${className} cursor-pointer duration-300 ease-in font-semibold ${icon && "flex gap-2"} flex leading-[150%]`}
    >
      {text} {icon}
    </div>
  );
};

export default Button;
