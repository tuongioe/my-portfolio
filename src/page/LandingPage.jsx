import React from "react";
import ProfileCard from "../component/ProfileCard";
import BackGroundComponent from "../component/BackGroundComponent";
import "../assets/style/LandingPage.css";
import Navigation from "../component/Navigation";
import TextType from "../component/TextType";

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Background */}
      <BackGroundComponent
        className="background"
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
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
          <TextType
            className="text-5xl mb-5 font-bold"
            text={[
              "Welcome to my porfolio website",
              "I'm Tuong nice to see you!",
            ]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-lg text-justify leading-relaxed mr-10">
            Hello, my name is Trương Quang Tường. I graduated from the
            University of Information Technology in Ho Chi Minh City, where I
            majored in Web Programming. I have a strong passion for designing
            and developing user interfaces, and I also enjoy exploring UX
            research to create UI designs that truly meet users’ needs. Beyond
            my academic and professional interests, I love singing. I was an
            active member of the Lossless Art Club at my university, where I
            regularly performed at acoustic shows organized by the club. Thanks
            to these experiences, I had the chance to meet and connect with
            friends from different faculties, which made my student life even
            more enjoyable and fulfilling.
          </p>
        </div>

        <div className="lg:mr-[6.5vw]">
          <ProfileCard
            name="Truong Q.Tuong"
            title="Front-end Dev"
            handle="Tuong"
            status="Online"
            contactText="Contact Me"
            avatarUrl="https://res.cloudinary.com/ddwkzkht5/image/upload/v1755164931/av1_bjnte9.jpg"
            miniAvatarUrl="https://res.cloudinary.com/ddwkzkht5/image/upload/v1755164936/av2_quwbcb.jpg"
            showUserInfo={true}
            enableTilt={true}
            showBehindGradient={false}
          />
        </div>
      </div>
      <div className="relative z-50 mt-10"></div>
    </div>
  );
}
export default LandingPage;
