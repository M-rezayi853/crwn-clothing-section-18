import React from 'react';

// import './form-input.scss';

import { GroupContainer, InputForm, InputFormLabel } from './form-input.styles';


const FormInput = ({ handleChange, label, ...otherProps}) => {
    return (
        <GroupContainer>
            <InputForm onChange={handleChange} {...otherProps} />
            {
                label ?
                <InputFormLabel {...otherProps}>
                    {label}
                </InputFormLabel>
                : null
            }
        </GroupContainer>
    );
};


export default FormInput;