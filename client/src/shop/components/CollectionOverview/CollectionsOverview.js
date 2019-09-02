import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForOverview, selectIsCollectionsFetching } from '../../redux/collection/collectionSelector';

import { CollectionPreview } from "../CollectionPreview/CollectionPreview";
import { Spinner } from '../Spinner/Spinner';

import './CollectionsOverview.scss';


export const CollectionsOverview = () => {
  const isLoading = useSelector(selectIsCollectionsFetching);
  const collections = useSelector(selectCollectionsForOverview);

  if (isLoading) return <Spinner />;

  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)
      }
    </div>
  );
};
