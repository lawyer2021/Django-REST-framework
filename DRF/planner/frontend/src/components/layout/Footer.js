import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-text-left">
                    <a href="http://localhost:3000" className="menu">HOME</a>
                    <a href="#" className="menu">ABOUT</a><br/>
                    <span className="menu">2023 All Rights Reserved</span>
                </p>
            </div>
        )
    }
}