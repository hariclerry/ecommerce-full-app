import React from "react";

import './customButton.scss'

const CustomButton = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSingIn ? "google-sign-in" : ""}  custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
