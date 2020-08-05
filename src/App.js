import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";


import "./App.css";
import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Header from "components/header/header";
import UserAuth from "pages/userAuth/userAuth"
import {setCurrentUser} from 'redux/user-reducer/userAction'
import { auth, createUserProfileDocument } from "firebase/firebaseUtil";

class App extends React.Component {
 
  // unsubscribe method
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
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
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/user" component={UserAuth} />
        </Switch>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
