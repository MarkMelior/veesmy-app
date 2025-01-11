import axios from 'axios';

import { isClient } from '../lib/next';

import type { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: isClient() ? '/api' : process.env.BASE_API_URL + '/api',
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
}).then((r) => r.data);

export type BodyType<Data> = Data;

export type ErrorType<Error> = AxiosError<Error>;
