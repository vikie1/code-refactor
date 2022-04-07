const { StringDecoder } = require('string_decoder');
const url = require('url');

const helpers = require('./helpers');

const router = require('./../config/router')

const users = require('./../data/users')
const {store} = require('./../data/storeData')

module.exports = (req, res) => {

  // Get the URL nd parse it
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query sstring as an object
  const queryStringObject = parsedUrl.query;

  // Get the HTTP method
  const method = req.method.toUpperCase();

  // Get the headers as an object
  const headers = req.headers;

  // Get the payload, if any
  const decoder = new StringDecoder('utf-8');
  let buffer = '';
  req.on('data', data => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();
  
    store(buffer);

    // Choose the handler this request shoulld go to. If none is found use notFound handler
    const requestUrl = typeof router[trimmedPath] !== 'undefined' ? router[trimmedPath] : router.notFound;


    // Construct the data object to send to the handler
    const data = {
      path: trimmedPath,
      query: queryStringObject,
      payload: helpers.parseJson(buffer),
      method,
      headers,
    };

    // Route the request to the handler specified in the router
    const requestHandler = (data, (statusCode, payload) => {
      // Use the status sent back by the handler or default to 200
      statusCode = typeof statusCode === 'number' ? statusCode : 200;

      // Use the payload called back by the handler or default to any empty object
      payload = typeof payload === 'object' ? payload : {};

      // convert the payload into a string
      const payloadString = JSON.stringify(payload);

      // Return response
      res.setHeader('Content-type', 'application/json');
      res.writeHead(statusCode)
      res.end(payloadString);

      // Log the request path
      console.log(headers, '\n', method, `/${trimmedPath}`);
      console.log('Responding with status:', statusCode);
      console.log('payload:', payload);
    });
    if(requestUrl == 'home' && req.method === 'GET') {
      requestHandler(data,(200,users));
    }
  });
};
