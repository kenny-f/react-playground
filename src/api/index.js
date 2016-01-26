import 'isomorphic-fetch';

export function login() {
  return fetch('http://localhost:3001/login')
    .then(res => res.json())
    .then(json => json);
}
