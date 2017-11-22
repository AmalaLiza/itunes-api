import 'whatwg-fetch';

/**
 * Function to make all fetch calls or rest calls.
 * @param url
 * @param optionsArg
 * @return object
 * * */

export default function request(url, optionsArg) {
  const options = optionsArg;

  if (options.body) {
    options.body = typeof options.body !== 'string' ? JSON.stringify(options.body) : options.body;
  }

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  options.headers = options.headers ? Object.assign({},
    defaultHeaders, options.headers) : defaultHeaders;

  return fetch(url, {
    credentials: 'same-origin',
    ...options,
  }).then((response) => {
    if (response.status !== 502) {
      return response.json();
    }

    throw new Error('Could not connect to server');
  }).then((response) => {
    const statusCode = response.status;
    console.log(response);
    if (statusCode === 200) {
      return response;
    }
    return response;
  });
}
