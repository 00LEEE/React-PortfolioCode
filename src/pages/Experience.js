import React, { useState, useEffect } from "react";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  const [experiences, setExperiences] = useState([
    {
      date: "2013 - 2017",
      title: "Gunnison Valley High, Gunnison, UT",
      subtitle: "",
      description: "High School Diploma",
      icon: <SchoolIcon />,
    },
    {
      date: "2017 - 2019",
      title: "Snow College, Ephraim, UT",
      subtitle: "General Studies",
      description: "Emphasis in Fine Arts (Graphic Design/3D Modeling)",
      icon: <SchoolIcon />,
    },
    {
      date: "2019 - 2020",
      title: "Salt Lake Community, South SLC, UT",
      subtitle: "Associate's Degree",
      description: "Studied 3D modeling/Animation/Software Engineering",
      icon: <SchoolIcon />,
    },
    {
      date: "2022 - 2023",
      title: "University of Utah, SLC, UT",
      subtitle: "Full Stack Web Developer Bootcamp",
      description:
        "During my comprehensive full stack web development bootcamp, I gained expertise in front-end development technologies such as HTML, CSS, and JavaScript, as well as back-end development with Node.js and Django frameworks. I also acquired knowledge of effective database design and management practices. Through hands-on experience and collaborative projects, I learned how to build dynamic web applications from concept to completion.",
      icon: <SchoolIcon />,
    },
  ]);

  useEffect(() => {
    const experienceCards = Array.from(document.querySelectorAll(".experience-card"));
    experienceCards.forEach((card, index) => {
      card.classList.add("bounce-in");
    });

    return () => {
      experienceCards.forEach((card, index) => {
        card.classList.remove("bounce-in");
      });
    };
  }, []);

  return (
    <div className="experience" style={{ minHeight: 'calc(100vh - 200px)' }}>
      <style>{`
        .experience {
          padding: 20px;
        }

        .experience-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .experience-card {
          width: 300px;
          background: linear-gradient(to bottom right, #b6b171, #b6b171);
          color: #fff;
          margin: 10px;
          border-radius: 8px;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
          animation: bounce-in 1s ease-out;
        }

        .experience-card-header {
          display: flex;
          align-items: center;
          padding: 10px;
        }

        .experience-card-icon {
          font-size: 30px;
          margin-right: 10px;
        }

        .experience-card-date {
          font-weight: bold;
        }

        .experience-card-content {
          padding: 10px;
        }

        .experience-card-title {
          margin: 0;
          font-size: 18px;
        }

        .experience-card-subtitle {
          margin: 5px 0;
          font-size: 14px;
          font-weight: bold;
        }

        .experience-card-description {
          margin: 0;
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
              `}</style>
        
              <div className="experience-cards">
                {experiences.map((experience, index) => (
                  <div key={index} className="experience-card">
                    <div className="experience-card-header">
                      <div className="experience-card-icon">{experience.icon}</div>
                      <div className="experience-card-date">{experience.date}</div>
                    </div>
                    <div className="experience-card-content">
                      <h3 className="experience-card-title">{experience.title}</h3>
                      {experience.subtitle && (
                        <h4 className="experience-card-subtitle">{experience.subtitle}</h4>
                      )}
                      <p className="experience-card-description">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        
        export default Experience;