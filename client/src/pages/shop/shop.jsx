import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "redux/shop/shopAction";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "redux/shop/shopSelector";
import WithSpinner from "components/with-spinner/withSpinner";
import CollectionsOverview from "components/collectionsOverview/collectionsOverView";
import CollectionPage from "pages/collection/collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match, isFetching, isFetchingCollections } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isFetchingCollections}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isFetchingCollections: selectIsCollectionsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
