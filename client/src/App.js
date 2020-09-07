import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Header from "components/header/header";
import UserAuthPage from "pages/userAuth/userAuth";
import CheckOutPage from "pages/check-out/checkOut";
import { checkUserSession } from "redux/user/userAction";
import { selectCurrentUser } from "redux/user/userSelector";

import { GlobalStyles } from "./globalStyles.js";
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
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/user"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <UserAuthPage />
            }
          />
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
