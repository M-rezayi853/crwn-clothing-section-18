import React from 'react';
import { connect } from 'react-redux';

import CollectionItems from '../../components/collection-item/collection-item';

import { selectCollection } from '../../redux/shop/shop.selectors';
// import './collection.scss';

import { CollectionPageContainer, Title, Items } from './collection.styles';


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <Title>{ title }</Title>
            <Items>
                {
                    items.map(item => 
                        <CollectionItems 
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </Items>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);