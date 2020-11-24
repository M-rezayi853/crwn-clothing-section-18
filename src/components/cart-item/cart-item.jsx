import React from 'react';

// import './cart-item.scss';

import { CartItemContainer, Image, ItemDetails, Name } from './cart-item.styles';


const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt="item" />
            <ItemDetails>
                <Name>{name}</Name>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};


export default CartItem;