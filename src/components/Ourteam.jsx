import React from "react";
import "../assets/Css/Ourteam.css";
import image from "../assets/Images/img.png"

const OurteamData = [
  // {
  //   name: "Immanuel S",
  //   role: "Visual Designer",
  //   imgUrl: image,
  //   email: "mailto:leroy@example.com",
  //   twitter: "https://twitter.com/leroy",
  //   linkedin: "https://linkedin.com/in/leroy",
  //   github: "https://github.com/leroy",
  // },
  {
    name: "Meganadhan",
    role: "Frontend Developer",
    imgUrl: "",
    email: "mailto:samantha@example.com",
    twitter: "https://twitter.com/samantha",
    linkedin: "https://linkedin.com/in/samantha",
    github: "https://github.com/samantha",
  },
  {
    name: "Sathish",
    role: "Backend Developer",
    imgUrl: "",
    email: "mailto:amit@example.com",
    twitter: "https://twitter.com/amit",
    linkedin: "https://linkedin.com/in/amit",
    github: "https://github.com/amit",
  },
  {
    name: "Julia Park",
    role: "UI/UX Designer",
    imgUrl: "",
    email: "mailto:julia@example.com",
    twitter: "https://twitter.com/julia",
    linkedin: "https://linkedin.com/in/julia",
    github: "https://github.com/julia",
  },
  // {
  //   name: "David Kim",
  //   role: "AI Developer",
  //   imgUrl: "",
  //   email: "mailto:david@example.com",
  //   twitter: "https://twitter.com/david",
  //   linkedin: "https://linkedin.com/in/david",
  //   github: "https://github.com/david",
  // },
  // {
  //   name: "Sara Ali",
  //   role: "Project Manager",
  //   imgUrl: "",
  //   email: "mailto:sara@example.com",
  //   twitter: "https://twitter.com/sara",
  //   linkedin: "https://linkedin.com/in/sara",
  //   github: "https://github.com/sara",
  // },
];

const Ourteam = () => {
  return (
    <section className="team-section">
      <p className="team-subtitle">Development Team</p>
      <h2 className="team-title">The talented people behind the scenes</h2>
      <div className="team-grid">
        {OurteamData.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
  <img src={member.imgUrl || image} alt={member.name} />
</div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-socials">
              <a href={member.email}><i className="fas fa-envelope"></i></a>
              <a href={member.twitter}><i className="fab fa-twitter"></i></a>
              <a href={member.linkedin}><i className="fab fa-linkedin-in"></i></a>
              <a href={member.github}><i className="fab fa-github"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Ourteam;
