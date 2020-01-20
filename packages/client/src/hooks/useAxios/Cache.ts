import { AxiosResponse } from 'axios';

import { ICache } from './ICache';

export class Cache implements ICache {
  private caches: { [index: string]: AxiosResponse } = {};
  private id = Math.random();

  getValue(key: string) {
    return this.caches[key];
  }

  setValue<T>(key: string, res: AxiosResponse<T>) {
    this.caches[key] = res;
  }

  hseValue(key: string) {
    return !!this.caches[key];
  }

  getCache() {
    return { ...this.caches };
  }

  getId() {
    return `${this.id}`;
  }
}
