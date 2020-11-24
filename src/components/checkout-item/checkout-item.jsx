import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
// import './checkout-item.scss';

import { CheckoutItemContainer, Image, Text, Quantity, RemoveButton } from './checkout-item.styles';


const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <Image>
                <img src={imageUrl} alt="item" />
            </Image>
            <Text>{name}</Text>
            <Quantity>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </Quantity>
            <Text>${price}</Text>
            <RemoveButton onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem);