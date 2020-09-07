import React, { Component, lazy, suspense, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionsStart } from "redux/shop/shopAction";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "redux/shop/shopSelector";
import WithSpinner from "components/with-spinner/withSpinner";

const CollectionsOverview = lazy(() =>
  import("components/collectionsOverview/collectionsOverView")
);
const CollectionPage = lazy(() => import("pages/collection/collection"));


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
        <Suspense>
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
          </Suspense>
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
