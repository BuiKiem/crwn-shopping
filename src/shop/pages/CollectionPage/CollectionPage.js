import React, { useState } from 'react';

import { CollectionPreview} from '../../components/CollectionPreview/CollectionPreview';

import { SHOP_DATA } from './data';

export const CollectionPage = (props) => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {
        collections.map(({id, ...otherProps}) => <CollectionPreview key={id} {...otherProps} />)
      }
    </div>

  );
};
