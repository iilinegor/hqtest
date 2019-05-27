import React, { Component } from 'react'

import Header from './comps/Header'
import Footer from './comps/Footer'
import Dashboard from './comps/Dashboard'
// import Header from './comps/Header'
// import Header from './comps/Header'
// import Spinner from './comps/Spinner'

import { AppStyle } from './style'

export default class App extends Component {
    render() {
        return (
            <AppStyle>
                <Header />
                <Dashboard />
                <Footer />
            </AppStyle>
        )
    }
}
