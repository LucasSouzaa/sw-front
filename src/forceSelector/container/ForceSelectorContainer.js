import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import ForceScreen from '../screen';

class ForceSelectorContainer extends Component {
    render() {
        return (
            <ForceScreen
                isLoading={this.props.isLoading}
                force={this.props.force}
                getTheForce={this.props.getTheForce}
                theme={this.props.theme}
                history={this.props.history}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.theForceReducer.isLoading,
    force: state.theForceReducer.force,
    theme: state.theForceReducer.theme
});

export default connect(mapStateToProps, actions)(ForceSelectorContainer);
