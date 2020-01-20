import { AxiosResponse } from 'axios';

export interface ICache {
  getValue<T>(key: string): AxiosResponse<T>;
  setValue<T>(key: string, response: AxiosResponse<T>): void;
  hseValue(key: string): boolean;
  getCache(): { [index: string]: AxiosResponse };
  getId(): string;
}
