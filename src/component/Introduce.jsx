import React from "react";
import CardComponent from "./CardComponent";

export default function Introduce() {
  return (
    <div className="lg:w-full lg:h-screen flex flex-col items-center justify-center bg-black">
      <div>
        <CardComponent
          icon="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756204727/Logo_UIT_updated.svg_ea2cvx.png"
          label="Education"
          description="2021-2025"
        />
      </div>
    </div>
  );
}
