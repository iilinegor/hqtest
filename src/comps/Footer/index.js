import React, { Component } from 'react'

import { FooterStyle } from './style'

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className='item'>
                    {false && <div className='counter'> </div>}
                    <div className='icon'> A</div>
                    <div className='label'> Dashboard</div>
                </div>

                <div className='item'>
                    {false && <div className='counter'> </div>}
                    <div className='icon'> A</div>
                    <div className='label'> Megabot</div>
                </div>

                <div className='item'>
                    {false && <div className='counter'> </div>}
                    <div className='icon'> A</div>
                    <div className='label'> Bot market</div>
                </div>

                <div className='item'>
                    {false && <div className='counter'> </div>}
                    <div className='icon'> A</div>
                    <div className='label'> Coin prices</div>
                </div>

                <div className='item'>
                    {false && <div className='counter'> </div>}
                    <div className='icon'> A</div>
                    <div className='label'> Profile</div>
                </div>
            </FooterStyle>
        )
    }
}
