import styled from "styled-components";

export const FormContainer = styled.div`
    
    width: 50rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
    border-radius: 50px;
    background: linear-gradient(145deg, #eaffff, #c5e4e4);
    box-shadow:  20px 20px 60px #bad7d7,
                -20px -20px 60px #fcffff;

`

export const FormHeader = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,217,206);
    background: linear-gradient(90deg, rgba(0,217,206,1) 0%, rgba(20,231,220,1) 100%);
    width: 50rem;
    border-radius: 2rem 2rem 0 0;
    padding: 2rem;
    gap: 0.5rem;

`

export const LogoGerresheimer = styled.img`

    width: 60%;

`

export const LogoBioRefeicoes = styled.img`

    width: 30%;

`

export const Message = styled.p`

    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin: 2rem 0;

`

