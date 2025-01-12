import axios from 'axios';

import type { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => apiInstance({
  ...config,
  ...options,
}).then((res) => res.data);

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
