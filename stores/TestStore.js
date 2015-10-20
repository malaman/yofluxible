import BaseStore from 'fluxible/addons/BaseStore';

class TestStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.testValue = '';
    }

    handleTestAction(testValue) {
        this.testValue = testValue + ' ';
        this.emitChange();
    }

    getTestValue() {
        return this.testValue;
    }
}

TestStore.storeName = 'TestStore';

TestStore.handlers = {
    'TEST_ACTION': 'handleTestAction'
};

export default TestStore;
