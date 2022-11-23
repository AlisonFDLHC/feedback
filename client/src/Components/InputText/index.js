import React from "react"

import * as C from './styles'

const InputText = ({label, onChange}) => {
    return (
        <>
            <C.TextAreaLabel>{label}</C.TextAreaLabel>
            <C.TextArea onChange={onChange}/>
        </>
    )
}

export default InputText;