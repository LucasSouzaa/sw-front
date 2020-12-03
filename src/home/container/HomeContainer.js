import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../forceSelector/actions';

import HomeScreen from '../screen';

class HomeContainer extends Component {
    render() {
        return (
            <HomeScreen
                isLoading={this.props.isLoading}
                getTheForce={this.props.getTheForce}
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.theForceReducer.isLoading
});

export default connect(mapStateToProps, actions)(HomeContainer);
