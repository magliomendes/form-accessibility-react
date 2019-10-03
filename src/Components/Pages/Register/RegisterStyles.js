import styled from 'styled-components';
import * as Variables from "../../../Assets/Variables.js";
import information from "./information.svg";
import loading from "./puff.svg";

export const LoadingComponent = styled.div`
    background-image: url(${loading});
    background-position: center;
    background-size: contain;
    width: 5rem;
    height: 5rem;
    margin: auto;
    transition: .2s;
    animation: opacity .2s ease-in;
`;

export const RegisterPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: ${Variables.lightPink};
    position: relative;
    flex-direction: column;
`;

export const Content = styled.section`
    width: 100vw;
    height: 80vh;
    min-height: 56rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const InputStepContent = styled.div`
    display: flex;  
    flex-direction: column;
    transition: .5s ease;
    animation-duration: .5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    width: 100vw;
    min-width: 18rem;
    max-width: 25rem;
`;

export const Input = styled.input`
    border: 0;
    border: .15rem solid transparent;
    transition: .4s;
    height: 3rem;
    width: 100vw;
    min-width: 18rem;
    max-width: 25rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-radius: .5rem;
    background-color: ${Variables.navyBlue};
    color: ${Variables.lightPink};
    font-weight: normal;
    letter-spacing: .1rem;
    font-size: 1.4rem;
    
    &:focus {
        border: .15rem solid ${Variables.navyBlue};
        background-color: transparent;
        outline: 0;
        box-shadow: 0;
        color: ${Variables.navyBlue};
    }
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: normal;
    letter-spacing: .1rem;
    margin-left: .5rem;
    color: ${Variables.navyBlue};
`;

export const TooltipContent = styled.div`
    background-image: url(${information});
    background-position: center;
    background-size: contain;
    position: absolute;
    right: 6.5rem;
    width: 2rem;
    height: 2rem;
    cursor: help;
    opacity: 1;
    
    &:hover, &:active, &:focus {
        div {
            display: block;
        }
    }
`;

export const Tooltip = styled.div`
    display: none;
    width: 15rem;
    height: auto;
    background-color: ${Variables.navyBlue};
    position: absolute;
    top: 1rem;
    right: 0rem;
    border-radius: 2rem;
    padding: 1rem;
    color: #FFF;
    letter-spacing: .05rem;
    font-weight: normal;
    font-size: 1.1rem;
    transition: .2s;
    opacity: 1;
    text-align: center;
`;


export const NextButton = styled.button`
    width: 5rem;
    border-radius: 2rem;
    height: 3rem;
    background-color: ${Variables.navyBlue};
    border: .05rem solid ${Variables.navyBlue};
    font-weight: normal;
    transition: .3s;
    padding: .2rem;
    
    &:after {
        content: "Next";
        text-align: center;
        margin: 0;
        width: 100%;
        display: block;
        font-size: 1.4rem;
        color: ${Variables.lightPink};
    }
    &:hover, &:focus {
        background-color: transparent;
        &:after {
            color:${Variables.navyBlue};
        }
    }
    &:disabled {
        opacity: .5;
        position: relative;
        color: ${Variables.navyBlue};
        cursor: not-allowed;
        &:after {
            color: ${Variables.lightPink};
        }
    }
`;

export const BackButton = styled.button`
    width: 5rem;
    border-radius: 2rem;
    height: 3rem;
    background-color: ${Variables.navyBlue};
    border: .05rem solid ${Variables.navyBlue};
    font-weight: normal;
    transition: .3s;
    padding: .2rem;
    
    &:after {
        content: "Back";
        text-align: center;
        margin: 0;
        width: 100%;
        display: block;
        font-size: 1.4rem;
        color: ${Variables.lightPink};
    }
    &:hover, &:focus {
        background-color: transparent;
        &:after {
            color:${Variables.navyBlue};
        }
    }
    &:disabled {
        opacity: .5;
        position: relative;
        color: ${Variables.navyBlue};
        cursor: not-allowed;
        &:after {
            color: ${Variables.lightPink};
        }
    }
`;

export const SubmitButton = styled.button`
    width: calc(100% - 8rem);
    border-radius: 2rem;
    height: 3rem;
    color: #000;
    background-color: ${Variables.navyBlue};
    border: .05rem solid ${Variables.navyBlue};
    transition: .15s;

    &:after {
        content: "Submit the registration";
        text-align: center;
        margin: 0;
        width: 100%;
        display: block;
        font-size: 1.4rem;
        color: ${Variables.lightPink};
    }

    &:hover, &:focus {
    background-color: transparent;
        &:after {
            color: ${Variables.navyBlue};
        }
    }

`;