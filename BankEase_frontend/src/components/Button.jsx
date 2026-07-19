const Button = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  variant = "primary",
}) => {
  const baseStyle =
    "text-white py-3 px-4 rounded-lg font-semibold transition duration-300";

  const widthStyle = fullWidth ? "w-full" : "w-auto";

  const variantStyle =
    variant === "danger"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${widthStyle} ${variantStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;