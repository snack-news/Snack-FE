import topicApi from '../api/topic';
import { ICropService } from './types';

export class CropService implements ICropService {
  getCropList: ICropService['getCropList'] = async () => {
    const topicList = (await topicApi.getTopics({ type: 'crop' })).data;
    return topicList.map(({ id, name, image }) => ({ id, name, ...(image && { image }) }));
  };
}

export default new CropService();
