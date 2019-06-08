# Pray [![npm install pray](https://img.shields.io/badge/npm%20install-pray-blue.svg)](https://www.npmjs.com/package/pray) [![gzip size](https://img.badgesize.io/franciscop/pray/master/index.min.js.svg?compression=gzip)](https://github.com/franciscop/pray/blob/master/index.min.js)

React asynchronous components:

```js
// Books.js
import React from 'react';
import pray from 'pray';

// Wrap the async component in pray:
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

// We again pass the component, not the instance:
export default () => (
  <Books fallback={Spinner} />
);
```

## Props

Props will be passed as expected:

```js
// Book.js
export default pray(async ({ id }) => {
  const book = await fetch(`/books/${id}`).then(res => res.json());
  return <div>{book.title}</div>;
});

// App.js
export default () => <Book id={123} />;
```

> None of the Hooks can be used within async components. Please call those above and pass them as props:

```js
const Books = pray(async ({ onLoad }) => {
  const books = await fetch('/books').then(res => res.json());
  onLoad(books);
  return (
    <ul>
      {books.map(book => <li>{book.title}</li>)}
    </ul>
  )
});

const BookList = () => {
  const [books, setBooks] = useState(null);
  return (
    <div>
      Book count: {books.length}
      <Books fallback={() => 'Loading...'} onLoad={setBooks} />
    </div>
  );
};
```
