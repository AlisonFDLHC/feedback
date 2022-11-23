import React, { useEffect, useState } from "react";

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import './styles.css'

import * as C from './styles'

import Axios from "axios";

import host from "../../Config";
import Button from "../../Components/Button"

const Export = () => {

    const [feedbacks, setFeedbacks] = useState([])

    const [data1, setData1] = useState();
    const [data2, setData2] = useState();

    useEffect(() => {
        Axios.get(`${host}/feedbacks`)
        .then((response) => {
            setFeedbacks(response.data)
            
        })
    }, [])

    const FilterByDate = (data1, data2) => {
        Axios.post(`${host}/filterByDate`, {
            data1: data1,
            data2: data2
        })
        .then((response) => {
            console.log(response.data)
            setFeedbacks(response.data)
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
                            <C.TableHeaderFeedbacks>Satisfação</C.TableHeaderFeedbacks>
                            <C.TableHeaderFeedbacks>Justificativa</C.TableHeaderFeedbacks>
                        </tr>
                    </thead>
                    <tbody>
                        {feedbacks.map((feedback) => {
                            return (
                                <C.TableRow key={feedback.pergunta0}>
                                    <C.TableDataFeedbacks>{feedback.resposta0[0] + feedback.resposta0.slice(1)}</C.TableDataFeedbacks>
                                    <C.TableDataFeedbacks>{feedback.resposta1[0].toUpperCase() + feedback.resposta1.slice(1)}</C.TableDataFeedbacks>
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

export default Export;