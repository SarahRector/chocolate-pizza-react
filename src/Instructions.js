import React, { Component } from 'react'

export default class Instructions extends Component {
    render() {
        return (
        <p>{this.props.instruction}</p>
        )
    }
}
