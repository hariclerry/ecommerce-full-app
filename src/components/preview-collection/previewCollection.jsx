import React from "react";

import CollectionItem from 'components/collection-item/collectionItem'

import "./previewCollection.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherCollectionItemProps }) => (
            <CollectionItem key={id} {...otherCollectionItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
