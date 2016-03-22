export function testAction(actionContext, payload) {
    actionContext.dispatch('TEST_ACTION', payload);
}

export function testTwoAction(actionContext, payload) {
    actionContext.dispatch('TEST_TWO_ACTION', payload);
}


export function hoverAction(actionContext) {
    actionContext.dispatch('HOVER_ACTION');
}

