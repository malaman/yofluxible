import BaseStore from 'fluxible/addons/BaseStore';

class TestStoreTwo extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.testValue = '';
    }

    handleTestAction(testValue) {
        this.testValue = testValue + ' ' + 2;
        this.emitChange();
    }

    getTestValue() {
        return this.testValue;
    }
}

TestStoreTwo.storeName = 'TestStoreTwo';

TestStoreTwo.handlers = {
    'TEST_TWO_ACTION': 'handleTestTwoAction'
};

export default TestStoreTwo;
