export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-extrabold text-secondary">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-gray-600 text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
