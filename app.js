import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import TestStore from './stores/TestStore';
import TestStoreTwo from './stores/TestStoreTwo';

// create new fluxible instance
const app = new Fluxible({
    component: Application
});

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(TestStore);
app.registerStore(TestStoreTwo);

module.exports = app;
