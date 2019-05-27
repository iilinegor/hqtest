import styled from 'styled-components'

export const FooterStyle = styled.div`
    display: flex;
    font-size: 1rem;
    background: #18283c;

    .item {
        flex: 1 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: 3.125em;
        color: #4d6078;

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
