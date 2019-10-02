import styled from 'styled-components';
import {
    ToApper
} from "./WelcomeKeyframes"

export const WelcomePage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #01815E;
    text-align: center;
    span {
        font-size: 2.5rem;
        color: #FFF;
        letter-spacing: .1rem;
        animation: ${ToApper} 2s ease-in;
        transform: translateY(5rem);
    }
`;