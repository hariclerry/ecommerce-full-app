import React from "react";

import Spinner from "components/spinner/spinner";

const WithSpinner = (WrappedComponent) => ({
  isLoading,
  match,
  ...otherProps
}) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent match={match} {...otherProps} />
  );
};

export default WithSpinner;
