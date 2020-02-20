import axios from 'axios';

import { useEffect, useState } from 'react';

import { CORP_API_URL } from '~src/constants/API_URL';

export const useCorps = () => {
  const [corps, setCorps] = useState<ICorp[]>();

  useEffect(() => {
    fetchCorps().then(newCorps => setCorps(newCorps));
  }, []);

  return corps;
};

const fetchCorps = async () => {
  const res = await axios.get<{ data: ICorp[] }>(CORP_API_URL);

  return res.data.data;
};
