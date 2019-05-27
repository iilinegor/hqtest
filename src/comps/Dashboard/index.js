import React, { Component } from 'react'

import { DashboardStyle } from './style'

import Stats from './Stats'
import Graph from './Graph'
import Bots from './Bots'
import Filters from './Filters'

export default class Dashboard extends Component {
    render() {
        return (
            <DashboardStyle>
                <Stats />
                <Graph />
                <Bots />
                <Filters />
            </DashboardStyle>
        )
    }
}
