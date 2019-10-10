import styled, { keyframes } from 'styled-components';
import * as Variables from "../../../Assets/Variables.js";

export const opacityCreator = keyframes` 
    0% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  `;

export const MagliomendesContent = styled.div`
    max-width: 25rem;
    height: 5vh;
    animation: ${opacityCreator} 2s forwards;
    transition: .5s;
    margin: 0 auto;
    position: relative;
    p {
        margin: 0 auto;
        font-size: 1.5rem;
        color: ${Variables.lightBrown};
        letter-spacing: .1rem;
        text-align: center;
        a {
            font-size: 1.5rem;
            letter-spacing: .1rem;
            color: ${Variables.navyBlue};
            font-weight: bold;
            font-style: none;
            &:hover {
                text-decoration: none;
            }
        }
    }
`;