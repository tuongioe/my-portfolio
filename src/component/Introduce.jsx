import React from "react";
import CardSwap, { Card } from "./CardSwap";
import { FaLanguage } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { FaUniversity } from "react-icons/fa";

export default function Introduce() {
  return (
    <div className="lg:w-full lg:h-screen flex flex-col items-center justify-center bg-black">
      <div
        className="
          w-[95%] max-w-[1150px] h-auto lg:h-[600px]
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
          <p className="text-lg text-justify leading-relaxed mr-10 w-[465px] lg:w-[500px] text-white mt-5">
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
          <div className="mt-8 mb-8 flex items-center space-x-3">
            <span className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
              8+
            </span>
            <p className="text-xl text-gray-300">Projects Completed</p>
          </div>
        </div>
        <div className="lg:block hidden">
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
              easing="elastic"
            >
              <Card>
                <h3 className="flex items-center text-white text-xl mt-5 ml-5 font-bold">
                  <span className="mr-5">
                    <FaLanguage />
                  </span>
                  Language
                </h3>
                <hr className="mt-5" />
                <div className="flex items-center mt-5 ml-5 ">
                  <img
                    src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756216325/jlpt_qpz9qp.png"
                    alt="JLPT N3"
                    style={{ maxWidth: "80px" }}
                    className=""
                  />
                  <p className="text-white text-sm ml-10 font-semibold">
                    JLPT N3
                  </p>
                  <p className="ml-20 text-sm text-gray-300">07/2024</p>
                </div>
                <div className="flex items-center mt-0 ml-5">
                  <img
                    src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756216324/ielts_wknnjy.png"
                    alt="IELTS 5.5"
                    style={{ maxWidth: "80px" }}
                    className=""
                  />
                  <p className="text-white text-sm ml-10 font-semibold">
                    Ielts 5.5
                  </p>
                  <p className="ml-20 text-sm text-gray-300">12/2020</p>
                </div>
              </Card>
              <Card>
                <h3 className="flex items-center text-white text-xl mt-5 ml-5 font-bold">
                  <span className="mr-5">
                    <TbCertificate />
                  </span>
                  Certificate
                </h3>
                <hr className="mt-5" />
                <img
                  src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756260235/Tru%CC%9Bo%CC%9Bng_Quang_Tu%CC%9Bo%CC%9B%CC%80ng_JavaScript_Basic_Certificate-1_h78oks.png"
                  alt="Basic JS"
                  style={{
                    maxWidth: "380px",
                    marginLeft: "10px",
                    marginTop: "10px",
                  }}
                />
              </Card>
              <Card>
                <h3 className="flex items-center text-white text-xl mt-5 ml-5 font-bold">
                  <span className="mr-5">
                    <FaUniversity />
                  </span>
                  Education
                </h3>
                <hr className="mt-5" />
                <div className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756204727/Logo_UIT_updated.svg_ea2cvx.png"
                    alt="University"
                    style={{
                      maxWidth: "60px",
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  />
                  <div className="mt-5 ml-5">
                    <p className="text-white font-semibold">
                      University of Information Technology
                    </p>
                    <p className="text-gray-300">2021-2025</p>
                  </div>
                </div>
                <p className="text-white font-semibold mt-5 ml-5">GPA: 3.13</p>
                <p className="text-white font-semibold mt-5 ml-5">
                  UIT Global Scholarship{" "}
                </p>
                <p className="text-white font-semibold mt-5 ml-5">
                  LossLess Art Club
                </p>
                <p className="text-white font-semibold mt-5 ml-5">
                  Sun Aterisk Jobfair
                </p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}
