# Pray

A super simple expectation library. It works perfectly with [test-controller]().

```js
// Perfect
pray('a', 'b', 'c')('a', 'b', 'c');

// Throws exception
pray('a', 'b', 'c')('a', 'b', 'D');
```

It also accepts a callback with the real element so you can do it yourself:

```js
// Throws error
pray('a', function(actual){
  if (actual === 1) throw new Error("Problem!");
})('a', 1);
```

An example with [test-controller]():


```js
var test = require('test-controller');
var pray = require('pray');

it("Checking for empty users", function(done){
  test(controller.login).post({}, pray(null, 'json', { error: "No user" }, done));
});
```
