# Nova Fetch Wrapper

**Nova** is a lightweight JavaScript library for making HTTP requests. It provides a simple and intuitive API for making requests and handling responses.

## Installation

To use the Nova library in your project, you can install it using npm:

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


#### GET

To make a GET request, you can use the `nova.get()` method. Here's an example:

```javascript
nova.get(url, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

In this example, the `nova.get()` method is used to make a GET request to the specified `url`, with an `Authorization` header containing the `your-token` token. The response is expected to be in JSON format. The `then()` method is used to handle the response, and the `catch()` method is used to handle any errors that occur.

#### POST

To make a POST request, you can use the `nova.post()` method. Here's an example:

```javascript
nova.post(url, { title: 'foo', body: 'bar' }, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

In this example, the `nova.post()` method is used to make a POST request to the specified `url`, with a JSON payload containing the `title` and `body` properties. An `Authorization` header containing the `your-token` token is also included. The response is expected to be in JSON format. The `then()` method is used to handle the response, and the `catch()` method is used to handle any errors that occur.

#### PUT

To make a PUT request, you can use the `nova.put()` method. Here's an example:

```javascript
nova.put(url, { title: 'foo', body: 'bar' }, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

In this example, the `nova.put()` method is used to make a PUT request to the specified `url`, with a JSON payload containing the `title` and `body` properties. An `Authorization` header containing the `your-token` token is also included. The response is expected to be in JSON format. The `then()` method is used to handle the response, and the `catch()` method is used to handle any errors that occur.

#### DELETE

To make a DELETE request, you can use the `nova.delete()` method. Here's an example:

```javascript
nova.delete(url, { 'Authorization': 'Bearer your-token' }, 'json')
    .then(response => console.log(response))
    .catch(error => console.error(error));
```

In this example, the `nova.delete()` method is used to make a DELETE request to the specified `url`, with an `Authorization` header containing the `your-token` token. The response is expected to be in JSON format. The `then()` method is used to handle the response, and the `catch()` method is used to handle any errors that occur.

:star: **If you liked what I did, if it was useful to you or if it served as a starting point for something more magical let me know with a star** :green_heart:
