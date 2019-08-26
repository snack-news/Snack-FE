import { useState, useEffect } from 'react';
import axios from 'axios';

type STATUS = 'pending' | 'success' | 'fail';

interface ICorpListState {
  status: STATUS;
  corpList: ICrop[];
}

interface ICrop {
  id: number;
  type: string;
  name: string;
  image: string | null;
}

const DEFAULT_STATE: ICorpListState = {
  status: 'pending',
  corpList: [],
};

const useCorpList = (): [ICorpListState] => {
  const URL = '/api/topic/corp';

  const [state, setState] = useState<ICorpListState>(DEFAULT_STATE);

  useEffect(() => {
    const fetchData = async () => {
      setState(DEFAULT_STATE);

      try {
        const response = await axios.get(URL);

        const corpList = response.data.data;

        setState({
          status: 'success',
          corpList,
        });
      } catch (error) {
        setState({
          ...DEFAULT_STATE,
          status: 'fail',
        });
      }
    };

    fetchData();
  }, []);

  return [state];
};

export default useCorpList;
