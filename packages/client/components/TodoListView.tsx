import { observer } from 'mobx-react';
import * as React from 'react';
import TodoList from '../store/TodoList';
import TodoView from './TodoView';

export interface Props {
  todoList: TodoList;
}

interface State {}

@observer
class TodoListView extends React.Component<Props, State> {
  public render() {
    const { todoList } = this.props;

    return (
      <div>
        <ul>
          {todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
      </div>
    );
  }
}

export default TodoListView;
