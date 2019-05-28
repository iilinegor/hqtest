import styled from 'styled-components'

export const ErrorPageStyle = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 1rem;


    img {
        max-width: 30%;
        max-height: 30%;
    }

    .label {
        font-weight: bolder;
        opacity: .5;
    }
`
