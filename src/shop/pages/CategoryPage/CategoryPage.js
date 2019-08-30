import React from 'react';

import { CollectionItem } from '../../components/CollectionItem/CollectionItem';

import './CategoryPage.scss';


export const CategoryPage = ({ match }) =>{
  console.log(match.params.categoryId);

  return (
    <div className="category-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
