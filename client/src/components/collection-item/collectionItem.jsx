import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "components/customButton/customButton";
import { addCartItem } from "redux/cart/cartAction";
import "./collectionItem.scss";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl} = item
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        {" "}
        ADD TO CART{" "}
      </CustomButton>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});
const ShowMatchPropsWithRouter = withRouter(CollectionItem);

export default connect(null, mapDispatchToProps)(ShowMatchPropsWithRouter);
