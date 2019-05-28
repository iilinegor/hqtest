import React, { Component } from 'react'

import { HeaderStyle } from './style'

export default class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <div className='menu'> </div>
                <div className='title'> {this.props.title}</div>
                <div className='reload'> </div>
            </HeaderStyle>
        )
    }
}
