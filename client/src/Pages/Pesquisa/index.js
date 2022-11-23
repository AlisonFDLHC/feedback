import React, { useState } from "react";

import * as C from "./styles";
import InputGroup from "../../Components/InputGroup";
import Button from "../../Components/Button";
import InputText from "../../Components/InputText";
import Message from "../../Components/Message";

import Axios from "axios";

import host from "../../Config";


import LogoGerresheimer from "../../Imgs/Gerresheimer_Logo_White.svg"
import LogoBioRefeicoes from "../../Imgs/BioRefeicoes_Logo_White.png"

const Pesquisa = () => {

    const [resposta0, setResposta0] = useState();
    const [resposta1, setResposta1] = useState();
    const [justificativa, setJustificativa] = useState();

    const [sending, setSending] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [justificando, setJustificando] = useState(false);
    const [error, setError] = useState("")

    const turnos = ["ADM","A","B","C","D"]

    const sendFeedback = (resposta0, resposta1, justificativa) => {

        if(resposta0 && resposta1) {
            if((resposta1 !== "regular" && resposta1 !== "pessimo") || justificativa) {
                setSending(true)
                Axios.post(`${host}/sendFeedback`, {
                    resposta0: resposta0,
                    resposta1: resposta1,
                    justificativa: justificativa,
                    data: new Date()
                })
                .then(setSending(false))
                .finally(
                    setResposta0(''),
                    setResposta1(''),
                    setError(''),
                    setJustificativa(''),
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
                    Pesquisa diária de satisfação com a refeição
                </C.Title>
                <C.InputContainer>
                    <InputGroup options={turnos} label="Informe seu turno" id="pergunta0" name="pergunta0" setResposta={setResposta0}/>
                    <InputGroup label="Qual a sua satisfação na refeição de hoje?" id="pergunta1" name="pergunta1" setResposta={setResposta1}/>
                    {justificando && <InputText label="Justifique por gentileza" onChange={(e) => {setJustificativa(e.target.value)}}/>}
                </C.InputContainer>
                    {sending && <p>ENVIANDO</p>}
                    {error && <C.Error>{error}</C.Error>}
            </C.Form>

            <C.FormFooter>
                    <Button onClick={() => {sendFeedback(resposta0,resposta1, justificativa)}}>Enviar</Button>
            </C.FormFooter>
            
        </C.FormContainer>

        : 

        <Message/>
        
    )
}

export default Pesquisa;