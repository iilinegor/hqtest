import styled from 'styled-components'

export const HeaderStyle = styled.div`
    display: flex;
    font-size: 1rem;
    padding: 1.75em 1.25rem 1.25em;
    color: #4d6078;

    .menu,
    .reload {
        flex: 1 1;
    }

    .title {
        flex: 3 1;
        text-align: center;
        font-weight: bold;
    }

    .reload {
        text-align: right;
    }
`
