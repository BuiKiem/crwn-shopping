import React from 'react';

import { CollectionItem } from '../../components/CollectionItem/CollectionItem';

import './CollectionPage.scss';


export const CollectionPage = ({ match }) =>{
  console.log(match.params.collectionId);

  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};
