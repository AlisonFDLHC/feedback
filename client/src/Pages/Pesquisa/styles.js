import styled, { keyframes } from "styled-components";


const transitionVertical = keyframes`

    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }

`

export const FormHeader = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,230,218);
    background: linear-gradient(0deg, rgba(0,230,218,1) 0%, rgba(30,204,195,1) 100%);
    width: 50rem;
    padding: 2rem;
    gap: 0.5rem;

`

export const FormFooter = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(0,217,206);
    background: linear-gradient(90deg, rgba(0,217,206,1) 0%, rgba(20,231,220,1) 100%);
    width: 50rem;
    padding: 2rem;

`

export const Title = styled.h1`

    font-size: 1.5rem;
    font-weight: 700;

`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: #fff;

`

export const Logo = styled.img`

    width: 60%;

`

export const LogoSecundaria = styled.img`

    width: 30%;

`

export const FormContainer = styled.div`
    
    animation-name: ${transitionVertical};
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    margin: 2rem 0;
    width: 50rem;
    border-radius: 25px 25px 50px 50px;
    overflow: hidden;
    background: linear-gradient(145deg, #eaffff, #c5e4e4);
    box-shadow: 0rem 0rem 1rem #1c1c1c50;

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    width: 100%;
`

export const Error = styled.p`

    font-size: 1.3rem;
    font-weight: bold;
    color: #B81738;

`
