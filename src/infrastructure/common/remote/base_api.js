import axios from "axios";

const base = async (options) => {
  const baseURL = "https://api.spoonacular.com";
  const res = await axios({
    baseURL,
    headers: {
      Accept: "application/json",
    },
    ...options,
  }).catch((err) => {
    console.log(err);
  });
  return res.data;
};

export const get = (url, params) => {
  const options = {
    method: "get",
    url,
    params,
  };
  return base(options);
};

export const patch = (url, data) => {
  const options = {
    method: "patch",
    url,
    data,
  };
  return base(options);
};

export const post = (url, data) => {
  const options = {
    method: "post",
    url,
    data,
  };
  return base(options);
};

export const put = (url, data) => {
  const options = {
    method: "put",
    url,
    data,
  };
  return base(options);
};

export const del = (url, data) => {
  const options = {
    method: "delete",
    url,
    data,
  };
  return base(options);
};
