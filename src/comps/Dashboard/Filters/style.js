import styled from 'styled-components'

export const FiltersStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bolder;
    padding: 0.625rem 1.25rem;
    color: #4d6078;
    /* font-size: 1rem;
    padding: 0 1rem 0.9375rem;
    text-transform: uppercase; */

    button {
        border: 1px solid #273145;
        border-radius: 1em;
        background: none;
        color: #4d6078;
        font-size: 0.75rem;
        padding: 0.35em 0.5em;
    }
    button[active="true"] {
        border: 1px solid #9196a0;
        color: #fff;
    }
`
