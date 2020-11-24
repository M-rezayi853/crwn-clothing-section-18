import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// import './collections-overview.scss';

import { CollectionOverviewContainer } from './collection-overview.styles';


const CollectionsOverview = ({ collections }) => {
    // const [collections, setCollections] = useState(SHOP_DATA);

    return (
        <CollectionOverviewContainer>
            {/* {
                collections.map(collection => 
                    <CollectionPreview 
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                    />
                )
            } */}
            {
                collections.map(({id, ...otherCollectionItems}) =>
                    <CollectionPreview 
                        key={id}
                        {...otherCollectionItems}
                    />
                )
            }
        </CollectionOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectionsOverview);