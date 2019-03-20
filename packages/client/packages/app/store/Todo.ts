import { observable } from 'mobx';

class Todo {
  public id = Math.random();

  @observable
  public title: string;

  @observable
  public finished = false;

  public toggleFinished() {
    this.finished = !this.finished;
  }

  public constructor(title: string) {
    this.title = title;
  }
}

export default Todo;
