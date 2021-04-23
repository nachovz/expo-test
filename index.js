import { registerRootComponent } from 'expo';

//import { StorybookUIRoot } from '../storybook/index';

import App from './App';

/*
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { register as registerKnobs, withKnobs } from '@storybook/addon-ondevice-knobs';
import { register as registerActions } from '@storybook/addon-ondevice-actions';

console.log('hey');
registerKnobs();
registerActions();
addDecorator(withKnobs);
console.log('loaded');
configure(() => {
  require('./storybook/stories'); // we will create this file in the next steps
}, module);
console.log('loaded 2');
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

//AppRegistry.registerComponent('main', () => StorybookUIRoot);
//export default StorybookUIRoot;
*/
registerRootComponent(App);