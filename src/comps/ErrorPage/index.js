import React, { Component } from 'react'

import { ErrorPageStyle } from './style'

export default class ErrorPage extends Component {
    render() {
        return (
            <ErrorPageStyle>
                <img src='https://image.flaticon.com/icons/svg/1149/1149168.svg' alt='' />
                <div className='label'>Coming soon</div>
            </ErrorPageStyle>
        )
    }
}
