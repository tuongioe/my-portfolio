import React from "react";
import ProfileCard from "../component/ProfileCard";
import BackGroundComponent from "../component/BackGroundComponent";
import "../assets/style/LandingPage.css";
import HeaderComponent from "../component/HeaderComponent";

function LandingPage() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
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
        <HeaderComponent
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
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
            avatarUrl="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/503841860_4040944252787970_7841905382624510625_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kh8aeRywUTMQ7kNvwHTcyuY&_nc_oc=Adl3EePdR7tCZhTXsy9RtQonLpWG4rSY6M1DZcuUaw5bwTEwNxtgnYT3t18iZutyPol2CNX0b_d0diqDOrEcaieV&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=3WB5A50lx7ZWyAdX6K4Sgw&oh=00_AfTUBiSzr_e8eThdgOzMfyJ9004mglHABbYNK_XIaeeS8g&oe=6894EC64"
            miniAvatarUrl="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-1/467018582_3858545364361194_4660093699435163937_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=bDO4XTWwen0Q7kNvwG72ISS&_nc_oc=Adngk7AAqnEQwB7rNMn3emWxBpBmPSqq59p7DsEnQOYYzxmLCRuUKDUtGIk2PQbyaface7iJgEYe-DSLzyb_PErr&_nc_zt=24&_nc_ht=scontent.fhan14-3.fna&_nc_gid=AmFaZrgxuDLy5NlHQ1pZzw&oh=00_AfR5iC4ZLMAs-bMJo1sEVROh0nVg6dzjxIafUBH5RokG9A&oe=68950C47"
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
