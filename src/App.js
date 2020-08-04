import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "pages/homepage/homepage";
import ShopPage from "pages/shop/shop";
import Header from "components/header/header";
import UserAuth from "pages/userAuth/userAuth"
import { auth, createUserProfileDocument } from "./firebase/firebaseUtil";

class App extends React.Component {
  state = {
    currentUser: null,
  };

  // unsubscribe method
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  // unsubscribe afrom user auth fter subcribing to prevent memory lick
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Fragment>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/user" component={UserAuth} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
