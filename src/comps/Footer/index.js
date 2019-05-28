import React, { Component } from 'react'

import { FooterStyle } from './style'

import dashboard from '../../pic/dashboard.png'
import megabot from '../../pic/megabot.png'
import bot_market from '../../pic/bot_market.png'
import coin_prices from '../../pic/coin_prices.png'
import profile from '../../pic/profile.png'


const pages = [
    {
        title: 'Dashboard',
        img: dashboard,
        note: 0
    },
    {
        title: 'Megabot',
        img: megabot,
        note: 0
    },
    {
        title: 'Bot market',
        img: bot_market,
        note: 0
    },
    {
        title: 'Coin prices',
        img: coin_prices,
        note: 0
    },
    {
        title: 'Profile',
        img: profile,
        note: 3
    }
]

export default class Footer extends Component {
    render() {
        return (
            <FooterStyle>
                {pages.map((p, i) => (
                    <div
                        className={`item ${i === this.props.page && 'active'}`}
                        onClick={this.props.handleMove.bind(null, i, p.title)}
                        style={{ backgroundImage: `url(${p.img})` }}
                    >
                        {p.note > 0 && <div className='note'> {p.note} </div>}
                    </div>
                ))}
            </FooterStyle>
        )
    }
}
