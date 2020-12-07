import React, { useState } from 'react'
import { FormContainer, FormInput, FormButton, FormBottomContainer, FormSocialContainer, FormSocialLink, FormError } from './Form.elements';
import validateData from '../../utils/validateData'
function Form({ inputs, buttons }) {
    const [errors, setErrors] = useState({})

    const handleValidation = (e) => {
        e.persist()
        const target = e.currentTarget || e.target
        if (target.value) {
            let err = validateData(target.type, target.value)
            setErrors(() => ({ ...errors, [target.type]: err }))
        }
    }

    return (
        <FormContainer>
            {inputs && (inputs.map((el, index) =>
                <>
                    <FormInput
                        placeholder={el.placeholder}
                        name={el.name} type={el.type}
                        required={el.required} onChange={(e) => el.handler(e)}
                        onBlur={(e) => handleValidation(e)}
                        error={errors[el.type]}
                        pattern={el.pattern}
                        key={'input-' + index}
                    />
                    <FormError>{errors[el.type]}</FormError>
                </>
            ))}
            <FormBottomContainer>
                {buttons && (buttons.map((el, index) =>
                    <FormButton
                        disabled={Object.values(errors).filter(el => !!el !== false).length}
                        onClick={(e) => el.switch ? el.handler(el.switch) : el.handler(e)}
                        key={'button-' + index}
                        background={el.background} type={el.type} value={el.label}
                    />))}
            </FormBottomContainer>
            <FormSocialContainer>
                {/* <FormSocialLink type='google' href="https://iimonj6pmb.execute-api.us-east-1.amazonaws.com/dev/authorize/social/google">Continue with Google</FormSocialLink> */}
                <FormSocialLink type='google' href="http://localhost:3000/social/google">Continue with Google</FormSocialLink>
            </FormSocialContainer>

        </FormContainer >
    )
}

export default Form
