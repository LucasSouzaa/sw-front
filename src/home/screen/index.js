import React, { Component } from 'react';
import './index.scss'
class Navigation extends Component {

    selectTheForce() {
        this.props.getTheForce()
        this.props.history.push('the-force')
    }

    render() {
        return (
            <div className="home-bg">
                <div className="home-title">
                    <h1>Welcome to</h1><h1 className="strong">&nbsp;iClinic</h1>
                </div>
                <h3>FRONTEND CHALLENGE</h3>

                <button
                    onClick={() => this.selectTheForce()}
                    className="btn-start"
                >
                    <p>S T A R T</p>
                </button>
            </div>
        );
    }
}

export default Navigation;
