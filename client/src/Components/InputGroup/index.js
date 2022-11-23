import React from "react";

import * as C from "./styles";

const InputGroup = ({label, id, options, name, setResposta}) => {
    return (
        <C.Container>
            <C.Label
                id={id}
            >
                {label}
            </C.Label>
            <C.RadioContainer>
                {options ? options.map((option) => {
                    return (
                        <C.RadioGroup key={option}>
                            <label htmlFor={option}>{option}</label>
                            <C.RadioInput value={option} type="radio" name={name} id={option} onChange={(e) => {setResposta(e.target.value)}}/>
                        </C.RadioGroup>
                    )
                }) : 
                
                    <>
                        <C.RadioGroup>
                            <label htmlFor="pessimo">Péssimo</label>
                            <C.RadioInput value="pessimo" type="radio" name={name} id="pessimo" onChange={(e) => {setResposta(e.target.value)}}/>
                        </C.RadioGroup>
                        
                        <C.RadioGroup>
                            <label htmlFor="regular">Regular</label>
                            <C.RadioInput value="regular" type="radio" name={name} id="regular" onChange={(e) => {setResposta(e.target.value)}}/>
                        </C.RadioGroup>
                        
                        <C.RadioGroup>
                            <label htmlFor="bom">Bom</label>
                            <C.RadioInput value="bom" type="radio" name={name} id="bom" onChange={(e) => {setResposta(e.target.value)}}/>
                        </C.RadioGroup>

                        <C.RadioGroup>
                            <label htmlFor="otimo">Ótimo</label>
                            <C.RadioInput value="otimo" type="radio" name={name} id="otimo" onChange={(e) => {setResposta(e.target.value)}}/>
                        </C.RadioGroup>
                    </>
                }
            
                
                
            </C.RadioContainer>
        </C.Container>
        
    )
}

export default InputGroup;