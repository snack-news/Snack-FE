import { AxiosResponse } from 'axios';

export interface GetParams {
  type?: string;
  sort?: 'name' | 'id';
}

export interface ResponseTopic {
  id: number;
  type: string;
  name: string;
  image: null | string;
}

export interface TopicApi {
  getTopics(args: GetParams): Promise<AxiosResponse<ResponseTopic[]>>;
}
