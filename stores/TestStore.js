import BaseStore from 'fluxible/addons/BaseStore';

class TestStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.testValue = '';
        this.hoverCount = 0;
    }

    handleTestAction(testValue) {
        this.testValue = testValue + ' ';
        this.emitChange();
    }

    handleHoverAction() {
        this.hoverCount = this.hoverCount + 1;
        this.emitChange()
    }

    getHoverCount() {
        return this.hoverCount;
    }

    getTestValue() {
        return this.testValue;
    }
}

TestStore.storeName = 'TestStore';

TestStore.handlers = {
    'TEST_ACTION': 'handleTestAction',
    'HOVER_ACTION': 'handleHoverAction'
};

export default TestStore;
