import React from "react";
import ProfileCard from "../component/ProfileCard";
import BackGroundComponent from "../component/BackGroundComponent";
import "../assets/style/LandingPage.css";
import Navigation from "../component/Navigation";

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
        <div className="left-content">
          <h1>Xin chào, tôi là Tường 👋</h1>
          <p>Đây là portfolio của tôi.</p>
        </div>

        <div className="right-content">
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
    </div>
  );
}
export default LandingPage;
