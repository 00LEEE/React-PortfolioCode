import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gunnison Valley High, Gunnison, UT
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Snow College, Ephraim, UT
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            General Studies
          </h4>

          <p>Emphasis in Fine Arts (Graphic Design/3D Modeling)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Salt Lake Community, South SLC, UT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Associates Degree
          </h4>
          <p>Studied 3D modeling/Annimation/Software Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Utah, SLC, UT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Full Stack Web Developer Bootcamp
          </h4>
          <p>
            During my comprehensive full stack web development bootcamp, I
            gained expertise in front-end development technologies such as HTML,
            CSS, and JavaScript, as well as back-end development with Node.js
            and Django frameworks. I also acquired knowledge of effective
            database design and management practices. Through hands-on
            experience and collaborative projects, I learned how to build
            dynamic web applications from concept to completion.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
