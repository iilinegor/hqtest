import styled from 'styled-components'

export const FooterStyle = styled.div`
    display: flex;
    font-size: 1rem;
    background: #18283c;
    
    .item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 3.125rem;
        color: rgb(77, 96, 120);
        flex: 1 0 0px;

        .icon {
        }

        .label {
            font-size: 0.625em;
            letter-spacing: 0.00625em;
        }

        .active {
            color: #fff;
        }
    }
`
