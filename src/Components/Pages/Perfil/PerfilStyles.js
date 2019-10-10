import styled from 'styled-components';
import * as Variables from "../../../Assets/Variables.js";

export const PerfilPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Variables.navyBlue};
    position: relative;
    flex-direction: column;
`;

export const InformationData = styled.div`
    margin: 1.5rem 0;
    label {
        display: block;
        font-size: 1.5rem;
        font-weight: normal;
        letter-spacing: .1rem;
        margin-left: .5rem;
        color: ${Variables.lightPink};
    }
    input {
        border: 0;
        border-bottom: .15rem solid ${Variables.lightPink};
        background-color: transparent;
        transition: .4s;
        height: 3rem;
        width: 90vw;
        min-width: 18rem;
        max-width: 28rem;
        margin-bottom: 1rem;
        padding: 0 .5rem;
        border-radius: .1rem;
        color: ${Variables.lightPink};
        font-weight: normal;
        letter-spacing: .1rem;
        font-size: 1.5rem;
    }
`;

export const NewRegistrationButton = styled.button`
    width: 100%;
    max-width: 28rem;
    border-radius: 1.5rem;
    height: 4rem;
    background-color: ${Variables.lightPink};
    border: .05rem solid ${Variables.lightPink};
    transition: .3s;
    margin-top: 3rem;
    &:after {
        content: "Create a new registration";
        font-weight: bold;
        text-align: center;
        margin: 0;
        width: 100%;
        display: block;
        font-size: 1.4rem;
        color: ${Variables.navyBlue};
    }

    &:hover, &:focus {
        background-color: transparent;
        &:after {
            color: ${Variables.lightPink};
        }
    }
`;