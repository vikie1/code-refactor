# Nodejs API

This is a simple nodejs REST API application.

## Task

You have three key task

1. Find and fix any bugs in the code
2. Implement node cluster and ensure the app still runs as expected
3. Add an API endpoint which takes JSON data and stores it in the file system

## Bonus Task

Refactor functions in `./src/controllers.js` to not require a callback argument but instead return data to the caller. e.g

### _Given_

```js
function sum(a, b, callback) {
  callback(a + b);
}

sum(1, 1, result => {
  console.log(result);
});
```

### _Expeccted_

```js
functions sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
console.log(result);
```
