export default function Checkbox({ checked, onChange, label, className = "" }) {
  return (
    <label className={`flex items-center gap-2 text-sm ${className}`}>
      <input
        type="checkbox"
        checked={!!checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}
