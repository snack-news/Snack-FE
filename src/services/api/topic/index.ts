import axios from '../axios';
import { TopicApi, ResponseTopic } from './types';

class BasicTopicApi implements TopicApi {
  private URL = '/topic';

  getTopics: TopicApi['getTopics'] = ({ type, sort }) => {
    const url = type ? `${this.URL}/${type}` : this.URL;
    const params = sort ? { sort } : {};

    return axios.get<ResponseTopic[]>(url, { params });
  };
}

export default new BasicTopicApi();
