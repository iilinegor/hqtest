import React, { Component } from 'react'

import { FiltersStyle } from './style'

const filters = [
    {
        code: '24h',
        title: '24h'
    },
    {
        code: '7d',
        title: '7 days'
    },
    {
        code: '30d',
        title: '30 days'
    },
    {
        code: 'all_time',
        title: 'All time'
    }
]

export default class Filters extends Component {
    handleFilter = code => {
        this.props.setCode(code)
    }

    render() {
        return (
            <FiltersStyle>
                <div className='label'> Time Range:</div>
                {filters.map(f => (
                    <button
                        onClick={this.handleFilter.bind(null, f.code)}
                        key={f.code}
                        active={`${f.code === this.props.code}`}
                    >
                        {f.title}
                    </button>
                ))}
            </FiltersStyle>
        )
    }
}
