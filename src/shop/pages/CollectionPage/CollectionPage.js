import React from 'react';
import { useSelector } from 'react-redux';

import { CollectionPreview} from '../../components/CollectionPreview/CollectionPreview';

import { selectCollections } from '../../redux/collection/collectionSelector';

export const CollectionPage = () => {
  const collections = useSelector(selectCollections);

  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)
      }
    </div>

  );
};
