import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

// import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import './cart-dropdown.scss';

import { CartDropdownContainer, CartItems, EmptyMessage, CartDropdownButton } from './cart-dropdown.styles';


// const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            {/* <CustomButton onClick={() => {
                history.push("/chechout");
                toggleCartHidden();
            }}>GO TO CHECKOUT</CustomButton> */}
            <CartDropdownButton onClick={() => {
                history.push("/chechout");
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });


// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
export default withRouter(connect(mapStateToProps)(CartDropdown));