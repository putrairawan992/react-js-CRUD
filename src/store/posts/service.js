import { httpGet, httpPost, httpDelete, httpPatch } from 'api';

export const getPosts = () => {
  const promises = [];

  [...new Array(100)].forEach((_, index) => {
    promises.push(httpGet(`/posts/${index + 1}`));
  });

  return Promise.all(promises).then((responses) => {
    const data = responses.map((response) => response.data);

    return data;
  });
};

export const createPost = async (payload) => {
  const { data } = await httpPost('/posts', payload);
  return data;
};

export const deletePost = async (id) => {
  const { data } = await httpDelete(`/posts/${id}`);
  return data;
};

export const updatePost = async (payload) => {
  const { data } = await httpPatch(`/posts/${payload.id}`, payload);
  return data;
};
