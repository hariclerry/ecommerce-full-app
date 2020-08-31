import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Header from "components/header/header";
import UserAuthPage from "pages/userAuth/userAuth";
import CheckOutPage from "pages/check-out/checkOut";
import { setCurrentUser } from "redux/user/userAction";
import { selectCurrentUser } from "redux/user/userSelector";
import { auth, createUserProfileDocument } from "firebase/firebaseUtil";

class App extends React.Component {
  // unsubscribe method
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });

          console.log(this.state);
        });
      }
      setCurrentUser(userAuth);
    });
  }

  // unsubscribe afrom user auth fter subcribing to prevent memory lick
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
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
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
