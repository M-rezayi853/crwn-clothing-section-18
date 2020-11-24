import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as LogoIcon } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import './header.scss';

import { HeaderContainer, Logo, Options, OptionLink } from './header.styles';


const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <Logo to="/" >
                <LogoIcon />
            </Logo>
            <Options>
                <OptionLink to="/shop" >SHOP</OptionLink>
                <OptionLink to="/shop" >CONTACT</OptionLink>
                {
                    currentUser ?
                    (<OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
                    : (<OptionLink to="/signin" >SIGN IN</OptionLink>)
                }
                <CartIcon />
            </Options>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);