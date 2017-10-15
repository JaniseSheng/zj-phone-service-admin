import axios from 'axios';
import {hostUrl} from './config';
import Router from 'vue-router'

export const axiosPost = (url, params) => {
  const _route = new Router();
  const _url = hostUrl + url;

  return axios.post(_url, params).then(function(response) {
    const res = response.data;
    return res
  })
}
