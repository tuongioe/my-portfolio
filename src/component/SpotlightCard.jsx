import { useRef, useState } from "react";

export default function SpotlightCard({
  label,
  icon,
  description,
  className = "",
  spotlightColor = "rgba(0, 255, 200, 0.3)", // xanh ngọc nhẹ
}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative rounded-xl border border-neutral-700
        bg-blue-900/40 backdrop-blur-md
        p-6 flex items-center transition-all
        ${className}
      `}
    >
      {/* Hiệu ứng spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Nội dung thẻ */}
      <img
        src={icon}
        alt=""
        style={{ maxWidth: "60px", maxHeight: "60px" }}
        className="mr-4 z-10"
      />
      <div className="flex flex-col z-10">
        <p className="text-white text-lg font-bold">{label}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}
