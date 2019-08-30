import React from 'react';
import { useSelector } from 'react-redux';

import { CollectionItem } from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/collection/collectionSelector';

import './CollectionPage.scss';


export const CollectionPage = ({ match }) =>{
  const collection = useSelector(selectCollection(match.params.collectionId));
  console.log(collection);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};
