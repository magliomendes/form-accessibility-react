import { keyframes } from 'styled-components';

export const ToApper = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(200rem, 0, 0) translateY(30vh);
        font-size: 4rem;
    }

    50% {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(30vh);
    }

    100% {
        transform: translateY(5rem);
        font-size: 2.5rem;
    }
`