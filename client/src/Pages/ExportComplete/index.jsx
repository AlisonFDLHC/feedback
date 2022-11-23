import React, { useEffect, useState } from "react";

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import './styles.css'

import * as C from './styles'

import Axios from "axios";

import host from "../../Config";
import Button from "../../Components/Button"

const ExportComplete = () => {

    const [feedbacksComplete, setFeedbacksComplete] = useState([])

    const [data1, setData1] = useState();
    const [data2, setData2] = useState();

    useEffect(() => {
        Axios.get(`${host}/feedbacksComplete`)
        .then((response) => {
            setFeedbacksComplete(response.data)
            
        })
    }, [])

    const FilterByDate = (data1, data2) => {
        Axios.post(`${host}/filterByDateComplete`, {
            data1: data1,
            data2: data2
        })
        .then((response) => {
            console.log(response.data)
            setFeedbacksComplete(response.data)
        })
    }

    return (
        <C.ContainerExport>
            <C.ExportHeader>
                <C.InputDate type="date" onChange={(e) => {setData1(e.target.value)}}/>
                <C.SpanDateFilter>ATÉ</C.SpanDateFilter>
                <C.InputDate type="date" onChange={(e) => {setData2(e.target.value)}}/>
                <Button onClick={() => FilterByDate(data1, data2)}>FILTRAR</Button>
                <ReactHTMLTableToExcel

                    id="feedback-table-button"
                    className="download_table_xls_button"
                    table="feedback-table"
                    filename="feedbacks"
                    sheet="feedbacks"
                    buttonText="Exportar para excell"
                    
                />
            </C.ExportHeader>
            
            <C.TableContainer>
                <C.TableFeedbacks id="feedback-table">
                    <thead>
                        <tr>
                            <C.TableHeaderFeedbacks>Turno</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta1</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta2</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta3</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta4</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta5</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta6</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta7</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta8</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Pergunta9</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Feedback</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Justificativa</C.TableHeaderFeedbacks>

                        </tr>
                    </thead>
                    <tbody>
                        {feedbacksComplete.map((feedback) => {
                            return (
                                <C.TableRow key={feedback.pergunta0}>
                                    <C.TableDataFeedbacks>{feedback.resposta0[0] + feedback.resposta0.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta1[0].toUpperCase() + feedback.resposta1.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta2[0].toUpperCase() + feedback.resposta2.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta3[0].toUpperCase() + feedback.resposta3.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta4[0].toUpperCase() + feedback.resposta4.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta5[0].toUpperCase() + feedback.resposta5.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta6[0].toUpperCase() + feedback.resposta6.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta7[0].toUpperCase() + feedback.resposta7.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta8[0].toUpperCase() + feedback.resposta8.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta9[0].toUpperCase() + feedback.resposta9.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta10}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.justificativa}</C.TableDataFeedbacks>
                                </C.TableRow>
                                
                            )
                        })}    
                    </tbody>
                </C.TableFeedbacks>
            </C.TableContainer>
             
        </C.ContainerExport>
    )
}

export default ExportComplete;