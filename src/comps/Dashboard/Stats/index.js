import React, { Component } from 'react'

import { StatsStyle } from './style'

export default class Stats extends Component {
    render() {
        return (
            <StatsStyle>
                <div className='title'> Trading capital</div>
                <div className='sections'>
                    <div className='total'>1.00865 BTC</div>
                    <div className='other'>
                        <div className='label'> Balance:</div>
                        <div className='value'> 10 850</div>
                        <br />
                        <div className='label'> On hold:</div>
                        <div className='value'> 24 000</div>
                    </div>
                </div>
            </StatsStyle>
        )
    }
}
