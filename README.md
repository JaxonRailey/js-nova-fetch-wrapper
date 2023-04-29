# Nova Fetch Wrapper

**Nova** is a lightweight JavaScript library for making HTTP requests. It provides a simple and intuitive API for making requests and handling responses.

## Installation

To use the Nova library in your project, just include it through the script tag in your html:

```html
<script src="nova.js"></script>
```

## Usage

Each method can accept the following parameters:

- `url` (required): URL to which the HTTP request will be sent.
- `data` (optional): only used for **POST** and **PUT** requests, is an object with data to sent.
- `headers` (optional): an object containing any headers to be sent with the HTTP request
- `responseType` (optional): format of the response to be returned.

**Only the `url` parameter is required. Others parameters (`data`, `headers`, and `responseType`)  are optional, and can be omitted if not needed.**

A generic **GET** or **DELETE** http request made with Nova is composed as follows:

```javascript
nova.get(url, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

while for **POST** and **PUT** requests, there is also the `data` parameter that you can use:

```javascript
nova.post(url, { title: 'foo', body: 'bar' }, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

as told before, only the first parameter is mandatory, so in case no other parameters are needed, the request could be written super succinctly, as below:

```javascript
nova.get(url)
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

:star: **If you liked what I did, if it was useful to you or if it served as a starting point for something more magical let me know with a star** :green_heart:
