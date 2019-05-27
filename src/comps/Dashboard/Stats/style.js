import styled from 'styled-components'

export const StatsStyle = styled.div`
    font-size: 1rem;
    padding: 0 1rem 0.9375rem;
    text-transform: uppercase;

    .title {
        font-size: 0.75em;
        color: #4d6078;
        font-weight: bolder;
        padding: 0;
    }

    .sections {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .total {
            font-size: 2em;
            font-weight: lighter;
        }

        .other {
            font-size: 0.75em;
            color: #4d6078;

            div {
                display: inline-block;
            }

            .label {
                font-weight: bolder;
                width: 55px;
            }

            .value {
                color: #fff;
                width: 65px;
                text-align: right;
                font-weight: bolder;
            }
        }
    }
`
