# Pray

React asynchronous components:

```js
// Books.js
import React from 'react';
import pray from 'pray';

// Notice the "async":
export default pray(async () => {
  const books = await fetch('/books').then(res => res.json());

  return (
    <ul>
      {books.map(book => <li>{book.title}</li>)}
    </ul>
  )
});
```

Then in your main code import and use it as usual:

```js
// App.js
import React from 'react';
import Books from './Books';

export default () => (
  <Books />
);
```

## Spinner

You can add a spinner for whenever the main component is still loading:

```js
//
const Spinner = () => 'Loading...';

// Note that we pass the component, not the instance:
export default pray(Spinner, async () => {
  ...
});
```

You can also assign it on render time:

```js
// App.js
const Spinner = () => "Loading...";

// Note that here we pass the instance, not the component:
export default () => (
  <Books fallback={<Spinner />} />
);
```
