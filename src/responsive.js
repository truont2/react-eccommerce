import {css} from 'styled-components';

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `
}
// could do more if you wanted 
export const tablet = (props) => {
    return css`
        @media only screen and (max-wdith: 380px) {
            ${props}
        }
    `
}