import React from "react";

import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from "components/error-boundary/error-boundary.styles";

const ContactPage = () => (
  <ErrorImageOverlay>
    <ErrorImageContainer imageUrl="https://i.imgur.com/qIufhof.png" />
    <ErrorImageText>Sorry, this page is under construction</ErrorImageText>
  </ErrorImageOverlay>
);

export default ContactPage;
