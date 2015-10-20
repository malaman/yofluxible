import React, { Component, PropTypes } from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import { testAction, testTwoAction } from '../actions/testAction';

class Home extends Component {
    static contextTypes = {
        executeAction: PropTypes.func.isRequired
    }

    handleChange(e) {
        this.context.executeAction(testAction, e.target.value);
    }

    render() {
        return (
            <div>
                <input onChange={ this.handleChange.bind(this) }
                    value={ this.props.testValue } />
                <input onChange={ this.handleChange.bind(this) }
                    value={ this.props.testValueTwo } />
                <input onChange={ this.handleChange.bind(this) }
                    value={ this.props.testValue } />
                <input onChange={ this.handleChange.bind(this) }
                    value={ this.props.testValue }
                    secondValue={ this.props.testValueTwo }/>
            </div>
        );
    }
}

Home = connectToStores(Home, ['TestStore', 'TestStoreTwo'], (context, props) => ({
    testValue: context.getStore('TestStore').getTestValue(),
    testValueTwo: context.getStore('TestStoreTwo').getTestValue()
}));

export default Home;
