import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "components/header/header";
import ErrorBoundary from "components/error-boundary/errorBoundary"
import ContactPage from "pages/contacts/contactPage"

import { checkUserSession } from "redux/user/userAction";
import { selectCurrentUser } from "redux/user/userSelector";
import Spinner from "components/spinner/spinner";

import { GlobalStyles } from "./globalStyles.js";

//Code-splitting with lazy loading
const HomePage = lazy(() => import("pages/homepage/homepage"));
const ShopPage = lazy(() => import("pages/shop/shop"));
const UserAuthPage = lazy(() => import("pages/userAuth/userAuth"));
const CheckOutPage = lazy(() => import("pages/check-out/checkOut"));
class App extends React.Component {
  // unsubscribe method
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // unsubscribe afrom user auth fter subcribing to prevent memory lick
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckOutPage} />
              <Route
                exact
                path="/user"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <UserAuthPage />
                  )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </Fragment>
    );
  }
}
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   collections: selectCollectionsForPreview(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
