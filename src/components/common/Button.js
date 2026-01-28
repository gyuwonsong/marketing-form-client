export default function Button({
  as: Comp = "button",
  variant = "main",
  className = "",
  children,
  ...props
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    h-14
    rounded-md
    px-5
    text-base
    font-semibold
    transition
    disabled:opacity-40
    disabled:cursor-not-allowed
  `;

  const variants = {
    main: "bg-main text-white hover:bg-main/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline:
      "border border-secondary text-secondary hover:bg-secondary/5 bg-white",
    ghost: "text-secondary hover:bg-secondary/5",
  };

  return (
    <Comp
      className={`${base} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
