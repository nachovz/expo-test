import * as React from 'react';
import { View } from 'react-native';
//import { styles } from '../constants/globalStyles';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import Button from './Button';
export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

/*export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};*/
storiesOf('Button', module)
  //.addDecorator(story => <View style={styles.TaskBox}>{story()}</View>)
  .add('default', () => <Button title="Click Me" />)
  /*.add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)*/;