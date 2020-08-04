import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        return (
        <li>{this.props.ingredient}</li>
        )
    }
}
