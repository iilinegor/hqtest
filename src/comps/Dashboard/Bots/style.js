import styled from 'styled-components'

export const BotsStyle = styled.div`
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    /* min-height: 300px; */
    padding: 0.9375rem 1rem;

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

            &::before {
                content: '';
                padding-top: 100%;
                float: left;
            }

            .mode {
            }

            .diff {
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
