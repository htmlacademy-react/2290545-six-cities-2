import axios, {AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token.ts';
import {toast} from 'react-toastify';

type DetailsMessage = {
  messages: string[];
}

type DetailMessageType = {
  type: string;
  message: string;
  details?: DetailsMessage[];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        if (detailMessage.details && detailMessage.details.length > 0 && detailMessage.details[0].messages) {
          detailMessage.details[0].messages.map((message: string) => toast.warn(message));
        } else {
          toast.warn(detailMessage.message);
        }
      }

      throw error;
    }
  );

  return api;
};

