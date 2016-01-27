import 'isomorphic-fetch';

export function login(creds) {
  return fetch('http://localhost:3001/login', {
    method: 'post',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify(creds),

  })
    .then(res => res.json())
    .then(json => json);
}
