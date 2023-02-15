import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-extend-sm navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000">PlannerAPP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    </ul>
                </div>
            </nav>
        )
    }
}