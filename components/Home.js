import React, { Component, PropTypes } from 'react';
import connectToStores from 'fluxible-addons-react/connectToStores';
import { testAction, testTwoAction, hoverAction } from '../actions/testAction';

class Home extends Component {
    static contextTypes = {
        executeAction: PropTypes.func.isRequired
    }

    handleChange(e) {
        this.context.executeAction(testAction, e.target.value);
    }

    handleHover() {
        let i;
        for (i = 0; i < 20; i++) {
            this.context.executeAction(hoverAction);
        }
    }

    render() {
        return (
            <div>
                <div>
                    {`Hover Count: ${this.props.hoverCount}`}
                </div>
                <input style={{height: 100}}
                    onChange={ this.handleChange.bind(this) }
                    value={ this.props.testValue }
                    onMouseEnter={this.handleHover.bind(this)}
                    onMouseLeave={this.handleHover.bind(this)}
                    />
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
    testValueTwo: context.getStore('TestStoreTwo').getTestValue(),
    hoverCount: context.getStore('TestStore').getHoverCount()
}));

export default Home;
