import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://twitter.com/OOLEEEEEE">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/kole.dallam/">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/kole-dallam-316033223/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Kole Dallam</p>
    </div>
  );
}

export default Footer;
