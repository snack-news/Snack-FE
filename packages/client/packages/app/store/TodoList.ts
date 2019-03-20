import { observable, computed } from 'mobx';
import Todo from './Todo';

class TodoList {
  @observable
  public todos: Todo[] = [];

  @computed
  public get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

export default TodoList;
