import React from 'react';

import SingIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
// import './sign-in-and-sign-up.scss';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';


const SingInAndSignUp = props => {
    return (
        <SignInAndSignUpContainer>
            <SingIn />
            <SignUp />
        </SignInAndSignUpContainer>
    );
};


export default SingInAndSignUp;