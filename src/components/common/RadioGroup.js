export default function RadioGroup({ name, value, onChange, options = [] }) {
  return (
    <div className="flex gap-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className={`
            flex
            flex-1
            items-center
            justify-center
            gap-2
            h-14
            rounded-md
            border
            bg-white
            px-4
            text-base
            font-medium
            cursor-pointer
            transition
            ${
              value === opt.value
                ? "border-secondary bg-secondary/5 text-secondary"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          <input
            type="radio"
            name={name}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
            className="sr-only"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
