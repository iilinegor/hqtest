import styled from 'styled-components'

import hq_coin from '../../../pic/hq_coin.png'

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
                width: 55px;
                text-align: right;
                font-weight: bolder;
            }

            .coin {
                background-image: url(${hq_coin});
                background-size: 100% auto;
                background-position: 50% 50%;
                width: 1.2em;
                height: 1.2em;
                /* margin: 0.6em 0.6em 0; */
                margin-bottom: -0.25em;
                margin-left: 0.35em;
                /* width: 30px;
                height: 30px; */
            }
        }
    }
`
