import React, { useEffect, useState } from "react";

const defFallback = () => null;
const defHandler = ({ error }) => error;

export default (ld, cb, err) => ({
  fallback,
  handler,
  dependencies = [],
  ...props
}) => {
  // Take them from the right arguments
  const [Loader, callback, Handler] = cb
    ? [fallback || ld || defFallback, cb, handler || err || defHandler]
    : [fallback || defFallback, ld, handler || err || defHandler];

  const ErrorHandler = err || handler;
  const [data, setData] = useState(<Loader {...props} />);
  useEffect(() => {
    Promise.resolve(callback(props))
      .then(data => setData(data || null))
      .catch(error => setData(<ErrorHandler error={error.message} />));
  }, dependencies);
  return data;
};
