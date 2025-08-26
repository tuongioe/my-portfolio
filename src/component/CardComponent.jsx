export default function CardComponent({ label, icon, description, className }) {
  return (
    <div
      className={` p-8 flex items-center bg-blue-900/40 rounded-md ${className}`}
    >
      <img
        src={icon}
        alt=""
        style={{ maxWidth: "80px", maxHeight: "80px" }}
        className="mr-4"
      />
      <div className="flex flex-col">
        <p className="text-white text-xl font-bold">{label}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}
