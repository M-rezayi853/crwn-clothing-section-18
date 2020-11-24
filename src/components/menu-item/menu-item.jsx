import React from 'react';
import { withRouter } from 'react-router-dom';

// import './menu-item.scss';

import { MenuItemContainer, BackgroundImage, Content, Title, Subtitle } from './menu-item.styles';


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return (
        // <div className={`menu-item ${size}`} onClick={() => history.push(`${match.path}${linkUrl}`)}>
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage className="background-image" imageUrl={imageUrl} />
            <Content className="content">
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>SHOP NOW</Subtitle>
            </Content>
        </MenuItemContainer>
    );
};


export default withRouter(MenuItem);