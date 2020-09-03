import React, { Fragment } from "react";

import "./homepage.scss";
import Directory from "components/directory/directory";

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Directory />
      </div>
    </Fragment>
  );
};

export default HomePage;
