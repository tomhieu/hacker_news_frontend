const apiUrl = 'http://localhost:3000';

const fetchApi = async(method, path, params={}, getMeta=null) => {

  let finalPath = path;

  let options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method.toUpperCase() === 'GET') {
    finalPath += '?' + Object.entries(params).map((v) => {
      if (Array.isArray(v[1])){
        return `${v[0]}=${v[1].join(',')}`
      } else {
        return `${v[0]}=${v[1]}`
      }
    }).join('&')
  } else {
    options['body'] = JSON.stringify(params)
  }

  return await fetch (apiUrl + `/${finalPath}`, options).then(res => {
    if(res.status == 404) return false;
    if(getMeta) {
      getMeta({page: parseInt(res.headers.get('X-Page')), perPage: parseInt(res.headers.get('X-Per-Page')), total: parseInt(res.headers.get('X-Total'))})
    }
    return res.json()
  }).then(response => {
    return response
  }).catch(err => {
    console.info("__err__", err)
  })
};

export {
  fetchApi,
};
