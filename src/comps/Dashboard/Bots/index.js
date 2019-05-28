import React, { Component } from 'react'

import { BotsStyle } from './style'

import orange_bot from '../../../pic/orange_bot.png'
import white_bot from '../../../pic/black_bot.png'
import blue_bot from '../../../pic/blue_bot.png'
import green_bot from '../../../pic/green_bot.png'
import yellow_bot from '../../../pic/yellow_bot.png'
import red_bot from '../../../pic/red_bot.png'

const icons = {
    orange_bot: orange_bot,
    white_bot: white_bot,
    blue_bot: blue_bot,
    green_bot: green_bot,
    yellow_bot: yellow_bot,
    red_bot: red_bot
}

export default class Bots extends Component {
    selectBot = botName => {
        this.props.setBotName(botName)
    }

    render() {
        const { botName } = this.props
        return (
            <BotsStyle>
                <div className='bots'>
                    {this.props.bots.map((b, i) => (
                        <div className='bot' key={'bot' + i} onClick={this.selectBot.bind(null, b.name)}>
                            <div className='icon' style={{ backgroundImage: `url(${icons[b.name]})` }} />
                            <div className='mode'> Attack</div>
                            <div className={`diff ${b.diff < 0 && 'minus'}`}>
                                {b.diff > 0 && '+'}
                                {b.diff}%
                            </div>
                            {b.name === botName && <div className='back' />}
                        </div>
                    ))}
                </div>
            </BotsStyle>
        )
    }
}
