class nova {

    /**
     * Makes an HTTP request using the Fetch API.
     *
     * @param {string} method - The HTTP method (e.g. 'GET', 'POST', 'PUT', 'DELETE').
     * @param {string} url - The URL for the request.
     * @param {object|null} [data=null] - The request payload. If no payload, pass null.
     * @param {object} [headers={}] - The request headers as key-value pairs.
     * @param {string} [responseType='json'] - The expected response type. Default is 'json'.
     *
     * @return {Promise} A Promise that resolves with the response data or rejects with an error.
     */

    static async request(method, url, data = null, headers = {}, responseType = 'json') {

        const options = {
            method,
            headers: { ...headers }
        };

        if (data) {
            if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
                options.body = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
            } else {
                options.body = JSON.stringify(data);
            }
        }

        const response    = await fetch(url, options);
        const contentType = response.headers.get('content-type');

        if (responseType === 'json' && contentType.includes('application/json')) {
            return await response.json();
        } else if (responseType === 'blob' && contentType.includes('application/octet-stream')) {
            return await response.blob();
        } else if (responseType === 'text' && contentType.includes('text/plain')) {
            return await response.text();
        } else if (responseType === 'formData' && contentType.includes('multipart/form-data')) {
            return await response.formData();
        } else {
            throw new Error(`Invalid responseType ${responseType} or content-type ${contentType}`);
        }
    }

    /**
     * Performs a GET request to the specified URL
     *
     * @param {string} url - The URL to send the GET request to
     * @param {Object} [headers={}] - An object containing any headers to include in the request
     * @param {string} [responseType='json'] - The response type to expect, can be 'json', 'text', 'blob', etc.
     *
     * @return {Promise} A Promise that resolves with the response data, or rejects with an error
     */

    static get(url, headers = {}, responseType = 'json') {
        return this.request('GET', url, null, headers, responseType);
    }

    /**
     * Performs a POST request to the specified URL
     *
     * @param {string} url - The URL to send the POST request to
     * @param {Object} [data={}] - An object containing the data to include in the request body
     * @param {Object} [headers={}] - An object containing any headers to include in the request
     * @param {string} [responseType='json'] - The response type to expect, can be 'json', 'text', 'blob', etc.
     *
     * @return {Promise} A Promise that resolves with the response data, or rejects with an error
     */

    static async post(url, data, headers = {}, responseType = 'json') {
        return await this.request('POST', url, data, headers, responseType);
    }

    /**
     * Performs a PUT request to the specified URL
     *
     * @param {string} url - The URL to send the PUT request to
     * @param {Object} [data={}] - An object containing the data to include in the request body
     * @param {Object} [headers={}] - An object containing any headers to include in the request
     * @param {string} [responseType='json'] - The response type to expect, can be 'json', 'text', 'blob', etc.
     * @return {Promise} A Promise that resolves with the response data, or rejects with an error
     */

    static async put(url, data, headers = {}, responseType = 'json') {
        return await this.request('PUT', url, data, headers, responseType);
    }

    /**
     * Performs a DELETE request to the specified URL
     *
     * @param {string} url - The URL to send the DELETE request to
     * @param {Object} [headers={}] - An object containing any headers to include in the request
     * @param {string} [responseType='json'] - The response type to expect, can be 'json', 'text', 'blob', etc.
     * @return {Promise} A Promise that resolves with the response data, or rejects with an error
     */

    static async delete(url, headers = {}, responseType = 'json') {
        return await this.request('DELETE', url, null, headers, responseType);
    }
}
