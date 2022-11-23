import React from "react";

import * as C from './styles'

const Button = ({children, type = "button", onClick}) => {
    return (
        <C.Button
            type={type}
            onClick={onClick}
        >
            {children}
        </C.Button>
    )
}

export default Button;