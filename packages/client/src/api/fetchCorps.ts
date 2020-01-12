import axios from 'axios';

import { CORP_API_URL } from './API_URL';

export const fetchCorps = async () => {
  // TODO 서버에서 받아온 값은 모두 믿지 않는 형태의 로직, type 추가 필요
  const res = await axios.get<{ data: ICorp[] }>(CORP_API_URL);

  return res.data.data;
};
