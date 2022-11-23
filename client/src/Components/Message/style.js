import styled, {keyframes} from "styled-components";



const transitionHorizontal = keyframes`

    from {
        transform: scalex(0);
    }
    to {
        transform: scalex(1);
    }

`

export const MessageContainer = styled.div`

    animation-name: ${transitionHorizontal};
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    width: 50rem;
    overflow: hidden;
    border-radius: 50px;
    background: linear-gradient(90deg, rgba(0,217,206,1) 0%, rgba(20,231,220,1) 100%);
    box-shadow:  20px 20px 60px #bad7d7,
                -20px -20px 60px #fcffff;

`

export const MessageText = styled.p`

    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin: 2rem 0;
    text-align: center;

`
