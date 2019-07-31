import { computed, observable } from "mobx";

class ExampleStore {
  @observable foo = 3;
  @observable bar = 4;

  @computed get multiple () {
    return this.foo * this.bar;
  }
}

export default new ExampleStore();
