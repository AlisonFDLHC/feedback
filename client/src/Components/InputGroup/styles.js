import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E5E5E5;
    padding: 1rem;
    width: 90%;

`

export const RadioInput = styled.input`

    transform: scale(2.5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
`

export const Label = styled.label`

    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;

`

export const RadioContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    gap: 5rem;
    width: 100%;

`

export const RadioGroup = styled.div`

    display:flex;
    flex-direction: column;
    gap: 1rem;

`