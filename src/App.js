import React, { Component } from 'react'

import { AnimateGroup } from 'react-animate-mount'

import Header from './comps/Header'
import Footer from './comps/Footer'
import Dashboard from './comps/Dashboard'
import ErrorPage from './comps/ErrorPage'

import { AppStyle } from './style'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Dashboard',
            page: 0
        }
    }

    handleMove = (page, title) => this.setState({ page, title })

    render() {
        const { page, title } = this.state
        return (
            <AppStyle>
                <Header title={title} />
                <AnimateGroup duration={200} type={'slide'}>
                    {page ? <ErrorPage key={page} /> : <Dashboard key={0} />}
                </AnimateGroup>
                <Footer handleMove={this.handleMove} page={page} />
            </AppStyle>
        )
    }
}
