import React, { Component } from "react";

import shopData from "pages/shop/shop.data";
import PreviewCollection from "components/preview-collection/previewCollection";

class ShopPage extends Component {
  state = {
    collections: shopData,
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
