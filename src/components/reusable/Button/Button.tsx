const Button = ({
  className = "",
  children,
  type = "button",
  onClick = () => {},
  disabled = false,
  ...restProps
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
