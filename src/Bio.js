import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <section className="bio">
                <img src="assets/van-pic.png" alt="this is an ethusiast"></img>
                    <div>
                        <h3>Vanessa Stevenson</h3>
                        <bio>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</bio>
                    </div>
                <button>SHARE RECIPE</button>
            </section>
        )
    }
}
