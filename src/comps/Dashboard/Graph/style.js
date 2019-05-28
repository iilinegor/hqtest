import styled from 'styled-components'

export const GraphStyle = styled.div`
    .diff {
        color: #5ea853;
        font-weight: normal;
        font-size: 1.2em;
        position: relative;
        top: 60px;
        left: calc(50% - 50px);
        margin-bottom: -25px;
        z-index: 10;
        width: 100px;
        text-align: center;
    }

    .minus {
        color: #f2427e;
    }

    .recharts-cartesian-axis-tick-value {
        font-size: 0.625em;
        letter-spacing: 0.01em;
        fill: hsla(0, 0%, 100%, 0.25);
    }

    .recharts-cartesian-axis-tick-line,
    .recharts-cartesian-axis-line {
        opacity: 0;
    }
`
