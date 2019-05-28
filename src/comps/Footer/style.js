import styled from 'styled-components'

export const FooterStyle = styled.div`
    display: flex;
    font-size: 1rem;
    background: #18283c;

    .item {
        width: 100%;
        height: 3.125rem;
        flex: 1 0 0px;
        background-size: auto 80%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        opacity: 0.2;

    }

    .active {
            opacity: 1;
        }
`
