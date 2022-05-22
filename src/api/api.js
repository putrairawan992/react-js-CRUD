import { axiosInstance } from './axios-instance';

const restAPI = (method, path, request) => {
  return axiosInstance[method](path, request)
    .then((res) => ({
      success: true,
      data: res.data,
    }))
    .catch((error) => {
      const dataMsg = error.response.data?.data?.map((v, i) => v.messages[i]);
      const errorMsg = dataMsg?.map((v) => v.message) || 'Unhandled failure';
      alert(errorMsg);

      return {
        success: false,
        data: error.response?.data || 'Not Found',
        status: error.response?.status || 'Not Found',
      };
    });
};

export const httpGet = (url, request) => {
  return restAPI('get', url, request);
};

export const httpDelete = (url, request) => {
  return restAPI('delete', url, request);
};

export const httpPost = (url, request) => {
  return restAPI('post', url, request);
};

export const httpPatch = (url, request) => {
  return restAPI('patch', url, request);
};
