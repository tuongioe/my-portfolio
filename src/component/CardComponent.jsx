export default function CardComponent({ label, icon, description }) {
  return (
    <div className="lg:w-[260px] lg:h-[80px] p-8 flex items-center bg-blue-900 rounded-md">
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
