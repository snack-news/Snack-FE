import * as React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import TodoListView from './components/TodoListView';
import Todo from './store/Todo';

export const render = (rootElement: Element | null) => {
  ReactDOM.render(<TodoListView todoList={store} />, rootElement);
};

store.todos.push(new Todo('Get Coffee'), new Todo('Write simpler code'));
store.todos[0].finished = true;

export default {
  render,
};
