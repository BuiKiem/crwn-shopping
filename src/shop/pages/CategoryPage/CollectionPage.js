import React from 'react';
import { useSelector } from 'react-redux';

import { CollectionItem } from '../../components/CollectionItem/CollectionItem';
import {Spinner} from '../../components/Spinner/Spinner';

import { selectCollection, selectIsCollectionsLoaded } from '../../redux/collection/collectionSelector';

import './CollectionPage.scss';


export const CollectionPage = ({ match }) =>{
  const isLoading = !useSelector(selectIsCollectionsLoaded);
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;

  if (isLoading) return <Spinner />;

  return (
    <div className="collection-page">
      <h2 className="title">{ title }</h2>
      <div className="items">
        {
          items.map((item) => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};
