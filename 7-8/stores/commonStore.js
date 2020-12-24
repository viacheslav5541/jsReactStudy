import { observable, action, reaction, computed } from 'mobx';
import axios from 'axios';

class CommonStore {

  @observable firstValue = 0;
  @observable secondValue = 0;
  @observable numbers = [1, 2, 3, 4, 8, 9]
  @observable pererender = 0;

  constructor() {
    this.count = 0
  }

  @computed get summ() {
    this.count = this.count + 1;
    return this.firstValue + this.secondValue
  }

  @action setFirstValue(value) {
    console.log(value)
    this.firstValue = value;
  }
  @action setSecondValue(value) {
    this.secondValue = value;
  }

}

export default new CommonStore();
