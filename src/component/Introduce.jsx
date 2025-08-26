import React from "react";
import CardComponent from "./CardComponent";
import MagicBento from "./MagicBento";
import SpotlightCard from "./SpotlightCard";
import CardSwap, { Card } from "./CardSwap";

export default function Introduce() {
  return (
    <div className="lg:w-full lg:h-screen flex flex-col items-center justify-center bg-black">
      <div
        className="
          lg:w-[1150px] lg:h-[600px]
          bg-gray/40
          backdrop-blur-xl
          rounded-3xl
          border-none
          shadow-[0_0_20px_rgba(0,255,200,0.4),0_0_40px_rgba(0,255,200,0.6)]
          relative
          overflow-hidden
          flex
          items-center
        "
      >
        <div className="ml-10 mt-10">
          <p className="text-4xl font-bold text-white">About Me</p>
          <p className="text-lg text-justify leading-relaxed mr-10 w-[500px] text-white">
            I'm Trương Quang Tường, a front-end developer passionate about
            creating modern and user-friendly interfaces. I graduated from the
            University of Information Technology, where I built a strong
            foundation in web development. I can read technical documents in
            both Japanese and English, and I also hold certifications in these
            languages, which helps me learn and adapt quickly in diverse
            environments. Outside of coding, my hobby is singing. During
            university, I was an active member of the Lossless Art Club,
            performing as a vocalist in acoustic shows. This passion not only
            allowed me to express myself but also helped me connect with friends
            from different majors, making my university life much more colorful
            and enjoyable.
          </p>
        </div>
        <div>
          <div
            style={{ height: "600px", position: "relative" }}
            className="ml-[420px] mb-[100px]"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={3000}
              pauseOnHover={true}
              width={400}
            >
              <Card>
                <h3 className="text-white text-xl mt-5 ml-5 font-bold">
                  Language
                </h3>
                <div className="flex items-center mt-5 ml-5 ">
                  <img
                    src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756216325/jlpt_qpz9qp.png"
                    alt=""
                    style={{ maxWidth: "80px" }}
                    className=""
                  />
                  <p className="text-white text-sm ml-5">JLPT N3</p>
                  <p className="ml-20 text-sm text-gray">07/2024</p>
                </div>
                <div className="flex items-center mt-0 ml-5">
                  <img
                    src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756216324/ielts_wknnjy.png"
                    alt=""
                    style={{ maxWidth: "80px" }}
                    className=""
                  />
                  <p className="text-white text-sm ml-5">Ielts 5.5</p>
                  <p className="ml-20 text-sm text-gray">12/2020</p>
                </div>
              </Card>
              <Card>
                <h3 className="text-white text-xl mt-5 ml-5">Hobby</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3 className="text-white text-xl mt-5 ml-5">Certificate</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}
