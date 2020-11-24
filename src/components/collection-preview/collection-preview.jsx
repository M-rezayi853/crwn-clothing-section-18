import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item';
// import './collection-preview.scss';

import { CollectionPreviewContainer, Title, Preview } from './collection-preview.styles';


const CollectionPreview = ({ title, items, routeName, history, match }) => { 
    return (
        <CollectionPreviewContainer>
            <Title onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</Title>
            <Preview>
                {items.filter((item, idx) => idx < 4).map(item => (
                    <CollectionItem 
                        key={item.id}
                        item={item}
                    />
                ))}
            </Preview>
        </CollectionPreviewContainer>
    );
};


export default withRouter(CollectionPreview);