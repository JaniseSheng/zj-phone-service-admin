import Vue from 'vue'
export const getRequest = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    Vue.http.get(url, { params, headers:{token:'111222'} }
      ).then((res) => {
        resolve(res.body);
      }).catch((res) => {
        reject(res.body);
      });
  });
}

export const postRequest = (url, body) => {
  return new Promise((resolve, reject) => {
    Vue.http.post(url, body,{
      emulateJSON:true,
    })
    .then((res) => {
      resolve(res.body);
    })
    .catch((res) => {
      reject(res.body);
    });
  });
}
