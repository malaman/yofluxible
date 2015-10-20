import React, { Component, PropTypes } from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import testAction from '../actions/testAction';

class About extends Component {
    static contextTypes = {
        getStore: PropTypes.func.isRequired,
        executeAction: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = this.getStoreState();
    }

    getStoreState() {
        return {
            testValue: this.props.context.getStore('TestStore').getTestValue()
        };
    }

    componentDidMount() {
        this.props.context.getStore('TestStore').addChangeListener(this._onStoreChange.bind(this));
    }

    componentWillUnmount() {
        this.props.context.getStore('TestStore').removeChangeListener(this._onStoreChange.bind(this));
    }

    _onStoreChange() {
        this.setState(this.getStoreState());
    }

    handleChange(e) {
        this.props.context.executeAction(testAction, e.target.value);
    }

    render() {
        return (
            <div>
            <input onChange={ this.handleChange.bind(this) } value={ this.state.testValue } />
            <input onChange={ this.handleChange.bind(this) } value={ this.props.testValue } />
            </div>
        );
    }
}

export default About;
