import React, { Component } from 'react'

import { HeaderStyle } from './style'

export default class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <div className='menu'> </div>
                <div className='title'> Dashboard</div>
                <div className='reload'> </div>
            </HeaderStyle>
        )
    }
}
