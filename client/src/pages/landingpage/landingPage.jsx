import React from "react";
import { Link } from "react-router-dom";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div class="module">
      <div className="mid">
        <h1 className="welcome-text">Clerry Clothing Shop</h1>
        <p className="welcome-subtext">
          {" "}
          Your one stop shop for all things fashion!
        </p>
        <Link to="/user" className="btn-link">
          Let's get shopping...
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
