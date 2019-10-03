import styled from 'styled-components';
import * as Variables from "../../../Assets/Variables.js";

export const MagliomendesContent = styled.div`
    max-width: 25rem;
    transition: .5s;
    margin: auto;
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