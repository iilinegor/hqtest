import React, { Component } from 'react'

import { DashboardStyle } from './style'

import Stats from './Stats'

export default class Dashboard extends Component {
    render() {
        return (
            <DashboardStyle>
                <Stats />
            </DashboardStyle>
        )
    }
}
