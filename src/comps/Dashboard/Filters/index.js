import React, { Component } from 'react'

import { FiltersStyle } from './style'

export default class Filters extends Component {
    render() {
        return (
            <FiltersStyle>
                <div className='label'> Time Range:</div>
                <button> 24h </button>
                <button> 7 days </button>
                <button> 30 days </button>
                <button active="true"> All time </button>
            </FiltersStyle>
        )
    }
}
