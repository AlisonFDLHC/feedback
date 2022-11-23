import styled from "styled-components";

export const ContainerExport = styled.div`

    width: 90vw;
    background-color: #fff;
    border-radius: 10px 10px 0 0;
    overflow: auto;
    box-shadow: 0 0 1rem #1c1c1c50;

`

export const ExportHeader = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    background: rgb(0,219,208);
    background: linear-gradient(180deg, rgba(0,219,208,1) 0%, rgba(0,224,226,1) 100%);
    padding: 3rem;
    box-shadow: 0 0 1rem #1c1c1c50;

`

export const TableContainer = styled.div`

    width: 100%;
    
`

export const TableFeedbacks = styled.table`

    width: 100%;
    

`

export const TableHeaderFeedbacks = styled.th`

    background: rgb(0,219,208);
    background: linear-gradient(0deg, rgba(0,219,208,1) 0%, rgba(0,224,226,1) 100%);
    color: white;
    padding: 1rem;
    

`

export const TableDataFeedbacks = styled.td`

    text-align: center;
    padding: 1rem;

`

export const FilterButton = styled.button`

    cursor: pointer;
    border-radius: 10px;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: #1c1c1c;
    color: white;

`

export const SpanDateFilter = styled.span`

    font-weight: bold;
    color: white;

`

export const InputDate = styled.input `

    cursor: pointer;
    outline: none;
    border: 0.1rem solid #1c1c1c;
    padding: 0.3rem 1rem;

`

export const TableRow = styled.tr`

    &:nth-child(odd){

    background-color: #1c1c1c10;

    }

`