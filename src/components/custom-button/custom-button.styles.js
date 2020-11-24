import styled, { css } from 'styled-components';


const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: #ffffff;

    &:hover {
        background-color: #357ae8;
        border: 1px solid #000000;
    }
`;


const getStylesButton = props => {
    if (props.inverted) {
        return invertedStyles;
    } else if (props.isGoogleSignIn) {
        return googleSignInStyles;
    }
};


export const CustomButtonContainer = styled.button`
  min-width: 155px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    ${getStylesButton}
`;