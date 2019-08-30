import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForOverview } from "../../redux/collection/collectionSelector";

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";

import './CollectionsOverview.scss';


export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForOverview);

  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)
      }
    </div>
  );
};
