import React, { Component } from 'react'

import { FooterStyle } from './style'

import dashboard from '../../pic/dashboard.png'
import megabot from '../../pic/megabot.png'
import bot_market from '../../pic/bot_market.png'
import coin_prices from '../../pic/coin_prices.png'
import profile from '../../pic/profile.png'

// const menuItems = [
//     dashboard
//     megabot
//     bot_market
//     coin_prices
//     profile
// ]

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                <div className='item active' style={{ backgroundImage: `url(${dashboard})` }} />
                <div className='item' style={{ backgroundImage: `url(${megabot})` }} />
                <div className='item' style={{ backgroundImage: `url(${bot_market})` }} />
                <div className='item' style={{ backgroundImage: `url(${coin_prices})` }} />
                <div className='item' style={{ backgroundImage: `url(${profile})` }} />
            </FooterStyle>
        )
    }
}
