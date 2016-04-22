# Pray

A super simple expectation library. Pray that the second invocation follows the first one. It works perfectly with [test-controller](https://github.com/franciscop/test-controller).

```js
// Perfect
pray('a', 'b', 'c')('a', 'b', 'c');

// Throws exception
pray('a', 'b', 'c')('a', 'b', 'D');
```

It also accepts a callback with the real element so you can do it yourself:

```js
// Works
pray('a', function(actual){
  expect(actual).to.equal(1);
})('a', 1);

// Throws error
pray('a', function(actual){
  expect(actual).not.to.equal(1);
})('a', 1);
```


An example with [test-controller](https://github.com/franciscop/test-controller):

```js
it("Checking for empty users", function(done){
  test(controller.login).post({}, pray(null, 'json', { error: "No user" }, done));
});
```
