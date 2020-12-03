import React, { Component } from 'react';
import './index.scss'
import darthvader from '../../images/darth-vader.png'
import luke from '../../images/luke-skywalker.png'
import backicon from '../../images/back-icon.png'
import lightbackicon from '../../images/lightback-icon.png'

class Navigation extends Component {

    componentDidMount() {
        if (!this.props.force) {
            this.props.getTheForce()
        }
    }

    back() {
        this.props.history.push("/")
    }

    render() {
        if(this.props.theme) {
            return (
                <div className={`force-bg ${this.props.theme}`}>
                    <div
                        className="btn-back"
                        onClick={() => this.back()}
                    >
                        {
                            this.props.theme === 'darkside' ?
                                (<img src={backicon}/>) :
                                (<img src={lightbackicon}/>)
                        }
                        <p>back</p>
                    </div>
                    <button
                        onClick={() => this.props.getTheForce() }
                        className="btn-selectforce"
                        disabled={this.props.isLoading}
                    >
                        choose your path again, Padawan
                    </button>

                    <div className="content-force">
                        {
                            this.props.theme === 'darkside' ?
                                (<img src={darthvader}/>) :
                                (<img src={luke}/>)
                        }

                        <div className="text-div">
                            <h3>Your master is </h3><h3 className="strong">&nbsp;{this.props.force.name}</h3>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div> </div>
            );
        }
    }
}

export default Navigation;
