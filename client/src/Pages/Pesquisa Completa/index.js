import React, { useState, useRef, useEffect } from "react";

import * as C from "./styles";
import InputGroup from "../../Components/InputGroup";
import Button from "../../Components/Button";
import InputText from "../../Components/InputText";
import Message from "../../Components/Message";

import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css'

import Axios from "axios";

import host from "../../Config";


import LogoGerresheimer from "../../Imgs/Gerresheimer_Logo_White.svg"
import LogoBioRefeicoes from "../../Imgs/BioRefeicoes_Logo_White.png"

const PesquisaCompleta = () => {

    

    const keyboard = useRef();

    const [inputs, setInputs] = useState({});
    const [inputName, setInputName] = useState("default");
    const [inputingFeedback, setInputingFeedback] = useState(false)

    const onChangeAll = inputs => {
        setInputs({ ...inputs });
        console.log("Inputs changed", inputs);
    };

    const onChangeInput = event => {
        const inputVal = event.target.value;
    
        setInputs({
          ...inputs,
          [inputName]: inputVal
        });
    
        keyboard.current.setInput(inputVal);
    };
    
    const getInputValue = inputName => {
        return inputs[inputName] || "";
    };  


    const [resposta0, setResposta0] = useState();
    const [resposta1, setResposta1] = useState();
    const [resposta2, setResposta2] = useState();
    const [resposta3, setResposta3] = useState();
    const [resposta4, setResposta4] = useState();
    const [resposta5, setResposta5] = useState();
    const [resposta6, setResposta6] = useState();
    const [resposta7, setResposta7] = useState();
    const [resposta8, setResposta8] = useState();
    const [resposta9, setResposta9] = useState();
    const [resposta10, setResposta10] = useState();
    const [justificativa, setJustificativa] = useState();

    const [sending, setSending] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [justificando, setJustificando] = useState(false);
    const [error, setError] = useState("")

    const turnos = ["ADM","A","B","C","D"]

    useEffect(() => {
        setResposta10(inputs["feedback"])
        setJustificativa(inputs["justificativa"])
    }, [inputs])

    const sendFeedback = (resposta0, resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, justificativa) => {

        if(resposta0 && resposta1 && resposta2 && resposta3 && resposta4 && resposta5 && resposta6 && resposta7 && resposta8 && resposta9) {
            setError('')
            if(
                (resposta1 !== "pessimo" && resposta1 !== "regular" &&
                resposta2 !== "pessimo" && resposta2 !== "regular" &&
                resposta3 !== "pessimo" && resposta3 !== "regular" &&
                resposta4 !== "pessimo" && resposta4 !== "regular" &&
                resposta5 !== "pessimo" && resposta5 !== "regular" &&
                resposta6 !== "pessimo" && resposta6 !== "regular" &&
                resposta7 !== "pessimo" && resposta7 !== "regular" &&
                resposta8 !== "pessimo" && resposta8 !== "regular" &&
                resposta9 !== "pessimo" && resposta9 !== "regular") || justificativa
                ) {
                    setSending(true)
                    Axios.post(`${host}/sendFeedbackComplete`, {
                        resposta0: resposta0,
                        resposta1: resposta1,
                        resposta2: resposta2,
                        resposta3: resposta3,
                        resposta4: resposta4,
                        resposta5: resposta5,
                        resposta6: resposta6,
                        resposta7: resposta7,
                        resposta8: resposta8,
                        resposta9: resposta9,
                        resposta10: resposta10,
                        justificativa: justificativa,
                        data: new Date()
                    })
                    .then(setSending(false))
                    .finally(
                        setResposta0(''),
                        setResposta1(''),
                        setResposta2(''),
                        setResposta3(''),
                        setResposta4(''),
                        setResposta5(''),
                        setResposta6(''),
                        setResposta7(''),
                        setResposta8(''),
                        setResposta9(''),                    
                        setError(''),
                        setInputs({}),
                        setInputingFeedback(false),
                        setJustificativa(''),
                        setResposta10(''),
                        setJustificando(false),
                        setShowMessage(true),
                        setTimeout(() => {setShowMessage(false)}, 5000)
                    )
                } else {
                    setJustificando(true)
                }
        } else {
            setError("Selecione uma opção")
        }
    }

    return (

        !showMessage ? 

        <C.FormContainer>
            <C.FormHeader>
                    <C.Logo src={LogoGerresheimer} />
                    <C.LogoSecundaria src={LogoBioRefeicoes}/>
            </C.FormHeader>
            <C.Form>
                <C.Title>
                    Pesquisa de satisfação com a refeição
                </C.Title>
                <C.InputContainer>
                    <InputGroup options={turnos} label="Informe seu turno" id="pergunta0" name="pergunta0" setResposta={setResposta0}/>
                    <InputGroup label="Variedade do cardápio" id="pergunta1" name="pergunta1" setResposta={setResposta1}/>
                    <InputGroup label="Tempero dos alimentos" id="pergunta2" name="pergunta2" setResposta={setResposta2}/>
                    <InputGroup label="Aparência dos alimentos" id="pergunta3" name="pergunta3" setResposta={setResposta3}/>
                    <InputGroup label="Quantidade oferecida" id="pergunta4" name="pergunta4" setResposta={setResposta4}/>
                    <InputGroup label="Temperatura dos alimentos" id="pergunta5" name="pergunta5" setResposta={setResposta5}/>
                    <InputGroup label="Sabor do suco" id="pergunta6" name="pergunta6" setResposta={setResposta6}/>
                    <InputGroup label="Limpeza do buffet durante o horário da refeição" id="pergunta7" name="pergunta7" setResposta={setResposta7}/>
                    <InputGroup label="Reposição dos alimentos no buffet" id="pergunta8" name="pergunta8" setResposta={setResposta8}/>
                    <InputGroup label="No geral, qual sua satisfação com a alimentação" id="pergunta9" name="pergunta9" setResposta={setResposta9}/>

                    <InputText 
                        label="Deixe aqui seu feedback" 
                        id="feedback" 
                        value={getInputValue("feedback")} 
                        onChange={onChangeInput}
                        onFocus={() => {
                                            setInputName("feedback")
                                            setInputingFeedback(true)
                                        }}

                    />

                    {justificando &&
                        <>
                            <InputText 
                                label="Justifique por gentileza sua opnião regular ou péssima" 
                                id="justificativa" 
                                value={getInputValue("justificativa")} 
                                onChange={onChangeInput}
                                onFocus={() => setInputName("justificativa")}
                            />
                        </>                     
                    }

                    {(justificando || inputingFeedback) &&
                        <Keyboard
                            keyboardRef={r => (keyboard.current = r)}
                            onChangeAll={onChangeAll}
                            inputName={inputName}
                            theme={"hg-theme-default hg-layout-default myTheme"}
                            layout={ {
                                'default': [
                                    '1 2 3 4 5 6 7 8 9 0 {bksp}',
                                    'q w e r t y u i o p',
                                    'a s d f g h j k l',
                                    'z x c v b n m',
                                    '{space}'
                                ]
                            }}
                            display= {{
                                '{bksp}': 'Apagar',
                                '{enter}': 'Enter',
                                '{space}': 'Espaço',
                                }}
                            buttonTheme={[
                                {
                                class: "hg-color",
                                buttons: "1 2 3 4 5 6 7 8 9 0 q w e r t y u i o p a s d f g h j k l z x c v b n m {enter} {bksp} {space}"
                                },
                                {
                                class: "hg-highlight",
                                buttons: "Q q"
                                }
                            ]}
                        />
                    }
                </C.InputContainer>
                
                {sending && <p>ENVIANDO</p>}
                {error && <C.Error>{error}</C.Error>}
            </C.Form>

            <C.FormFooter>
                <Button onClick={() => {sendFeedback(resposta0, resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, resposta7, resposta8, resposta9, resposta10, justificativa)}}>Enviar</Button>
            </C.FormFooter>

        </C.FormContainer>

        : 

        <Message/>
        
    )
}

export default PesquisaCompleta;