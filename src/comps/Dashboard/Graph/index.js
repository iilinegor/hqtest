import React, { Component } from 'react'

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Brush,
    Legend,
    ReferenceArea,
    ReferenceLine,
    ReferenceDot,
    ResponsiveContainer,
    LabelList,
    Label
} from 'recharts'

import { GraphStyle } from './style'

const data = Array.from(Array(25).keys()).map(i => ({ amt: 1500 + Math.random() * 1000, time: i }))

const renderCustomAxisTick = ({ payload, x, y, width, height, value }) => {
    if (payload.value !== 0 && payload.value !== 24)
        return (
            <text
                x={x}
                y={y + 5}
                fill='#666'
                textAnchor='middle'
                dy='0.71em'
                className='recharts-cartesian-axis-tick-value'
            >{`${payload.value + 1}.05`}</text>
        )
}

export default class Graph extends Component {
    constructor(props) {
        super(props)
        this.state = { data, width: 800 }
    }

    componentDidMount = () => {
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
        if (window.innerWidth >= 800) {
            this.state.width !== 800 && this.setState({ width: 800 })
        } else {
            this.setState({ width: window.innerWidth })
        }
    }

    render() {
        const { data, width } = this.state

        return (
            <GraphStyle>
                <AreaChart width={width} height={150} data={this.state.data} syncId='test'>
                    <defs>
                        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset='0%' stopColor='#0080e3' stopOpacity={0.85} />
                            <stop offset='95%' stopColor='#0080e3' stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey='time' type='number' tick={renderCustomAxisTick} tickCount={7} />
                    <CartesianGrid stroke='#1c2e45' strokeDasharray='3 3' />
                    <Area
                        stackId='0'
                        type='monotone'
                        dataKey='amt'
                        stroke='#0080e3'
                        stroke-width='3'
                        fill='url(#colorUv)'
                    />
                </AreaChart>
            </GraphStyle>
        )
    }
}
