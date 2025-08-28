import React from "react";
import ProfileCard from "../component/ProfileCard";
import BackGroundComponent from "../component/BackGroundComponent";
import "../assets/style/LandingPage.css";
import Navigation from "../component/Navigation";
import TextType from "../component/TextType";
import ButtonComponent from "../component/ButtonComponent";
import { RiDownloadLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import Introduce from "../component/Introduce";
import TechStacks from "../component/TechStacks";
import Projects from "../component/Projects";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <div id="/" className="landing-container">
      {/* Background */}
      <BackGroundComponent
        className="background"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={2.0}
        rayLength={3.0}
        fadeDistance={2.0}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      <div className="nav">
        <Navigation />
      </div>
      {/* Nội dung chính */}
      <div className="content">
        <div className="lg:ml-[6.5vw] ">
          <div className="flex items-center lg:w-[30vw] bg-gray-800/40 mb-5 rounded-xl font-semibold">
            <img
              src="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756195912/da955287bab2e05ae8383782bc6ad6b4-removebg-preview_fezhdr.png"
              alt=""
              style={{ maxWidth: "3rem", paddingLeft: "10px" }}
            />
            <p className="p-2">
              "Design with purpose. Develop with precision."
            </p>
          </div>
          <TextType
            className="text-4xl mb-5 font-bold "
            text={[
              "Welcome to my porfolio website",
              "I'm Tuong nice to see you!",
            ]}
            typingSpeed={85}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-lg text-justify leading-relaxed lg:mr-10 lg:w-[31.25rem]">
            Hello, my name is Truong Quang Tuong. I'm a Front-end Developer
            passionate about creating intuitive and engaging user interfaces.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            {" "}
            <ButtonComponent
              className="bg-gray-900/90 backdrop-blur-md px-8 py-4 rounded-full mt-5 lg:text-xl text-lg border-none"
              icon={<RiDownloadLine size={28} />}
              label="Download my CV"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Truong_Quang_Tuong_CV.pdf";
                link.download = "Truong-Quang-Tuong-CV.pdf"; // tên file khi tải xuống
                link.click();
              }}
            />
            <ButtonComponent
              className="bg-gray-900/90 backdrop-blur-md px-8 py-4 rounded-full mt-5 ml-5 lg:text-xl text-lg border-none"
              icon={<MdOutlineExplore size={28} />}
              label="Explore my projects"
              onClick={() => {
                const section = document.getElementById("project");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

        <div className="lg:mr-[6.5vw]">
          <ProfileCard
            name="Truong Q.Tuong"
            title="Front-end Dev"
            handle="Tuong"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://res.cloudinary.com/ddwkzkht5/image/upload/v1756196259/Avatar-removebg-preview_gvtzw5.png"
            miniAvatarUrl="https://res.cloudinary.com/ddwkzkht5/image/upload/v1755164936/av2_quwbcb.jpg"
            showUserInfo={true}
            enableTilt={true}
            showBehindGradient={false}
            className="lg:block hidden"
          />
        </div>
      </div>
      <div id="about" className="">
        <Introduce />
      </div>
      <div id="tech">
        <TechStacks />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default LandingPage;
