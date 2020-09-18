import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "redux/cart/cartSelector";
import { selectCurrentUser } from "redux/user/userSelector";
import CartIcon from "components/cart-icon/cartIcon";
import CartDropdown from "components/cart-dropdown/cartDropdown";
import Logo from "assets/logo.png";
import { signOutStart } from "redux/user/userAction";
import "./header.scss";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" alt="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <Fragment>
            <Link className="option" to="/shop">
              SHOP
            </Link>
            <div className="option" onClick={signOutStart}>
              SIGN OUT{" "}
            </div>
            <CartIcon />
            {hidden ? null : <CartDropdown />}
          </Fragment>
        ) : (
          <Fragment>
            <Link className="option" to="/user">
              SIGN IN
            </Link>
            <Link className="option" to="/contact">
              CONTACT
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
