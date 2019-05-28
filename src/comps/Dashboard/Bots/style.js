import styled from 'styled-components'

import bot_arrows from '../../../pic/bot_arrows.png'

export const BotsStyle = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    padding: 0rem 1rem;

    .bots {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        max-width: 450px;
        width: 95%;
        font-size: 0.7rem;
        font-weight: bolder;

        .bot {
            position: relative;
            width: calc(100% / 3 - 0.5em);
            background-color: #1c293f;
            text-align: center;
            margin: 0.5px;
            border-radius: 0.25rem;
            display: flex;

            flex-direction: column;
            justify-content: center;
            align-items: center;

            height: 100px;

            /* &::after {
                content: '';
                position: absolute;
                top: -40%;
                right: 50%;
                width: 100%;
                height: 6px;
                background: linear-gradient(99deg, #292f3f, #121521);
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            } */

            /* &::before {
                content: '';
                padding-top: 100%;
                float: left;
            } */

            .arrows {
                position: absolute;
                top: -60px;
                left: -25px;
                min-width: 150%;
                min-height: 150%;
                background-size: 100% auto;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                background-image: url(${bot_arrows});
                pointer-events: none;
                z-index: 100;
            }

            .icon {
                background-size: auto 80%;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                width: 50px;
                height: 50px;
                margin-bottom: -5px;
            }

            .mode {
                font-size: 0.8em;
            }

            .diff {
                font-size: 0.8em;
                color: #5ea853;
                margin-top: -2px;
            }

            .minus {
                color: #f2427e;
            }

            .back {
                position: absolute;
                top: 0;
                left: 0;
                min-width: 100%;
                min-height: 100%;
                border-radius: 1rem;
                background-image: radial-gradient(circle, #20345000, #20345000, #203450);
            }
        }
    }
`
