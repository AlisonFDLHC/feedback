import React from "react"

import * as C from './styles'

const InputText = ({label, onChange, value, onFocus, onBlur}) => {
    return (
        <>
            <C.TextAreaLabel>{label}</C.TextAreaLabel>
            <C.TextArea value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur}/>
        </>
    )
}

export default InputText;