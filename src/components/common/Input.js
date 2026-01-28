export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`
        w-full
        h-14
        rounded-md
        border border-gray-200
        bg-white
        px-4
        text-base
        outline-none
        focus:ring-2 focus:ring-secondary/20
        ${className}
      `}
      {...props}
    />
  );
}
