import React from "react";
import { Link } from "react-router-dom";

import "./landingPage.scss";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-main">
        <div className="header-title">
          <h1 className="welcome-text">Clerry Clothing Shop</h1>
          <h2 className="welcome-subtext">
            {" "}
            Your one stop shop for all things fashion!
          </h2>
          <Link to="/user" className="btn-link">
            Let's get shopping...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
