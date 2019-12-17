import useSWR from 'swr';
import { oc } from 'ts-optchain';

interface ICrop {
  id: number;
  type: string;
  name: string;
  image: string | null;
}

export const useCorps = () => {
  const URL = '/api/topic/corp';

  const { data, error } = useSWR<{data: ICrop[]}>(URL);

  return { corps: oc(data).data(), error };
};
