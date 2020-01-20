import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useContext, useMemo, useState } from 'react';

import { CacheContext, BaseUrlContext, PromisesContext } from './AxiosContext';

const useBaseUrl = () => useContext(BaseUrlContext);
const useAxiosCache = () => useContext(CacheContext);
const usePromises = () => useContext(PromisesContext);

export const useAxios = <T>(config: AxiosRequestConfig, onError?: (e: any) => void) => {
  const baseURL = useBaseUrl();
  const promises = usePromises();
  const axiosInstance = useMemo(() => axios.create({ baseURL }), [baseURL]);

  const cache = useAxiosCache();
  const key = useMemo(() => createKey(config), [config]);

  const [res, setRes] = useState<AxiosResponse<T>>();

  if (cache.hseValue(key)) return cache.getValue<T>(key);

  if (!promises[key]) {
    promises[key] = (async () => {
      try {
        const newRes = await axiosInstance(config);
        cache.setValue<T>(key, newRes);

        setRes(newRes);
      } catch (e) {
        if (onError) onError(e);
      }
    })();
  }

  return res;
};

const createKey = (config: AxiosRequestConfig) => JSON.stringify(config);
