import React, { useEffect, useState } from "react";

export default (ld, cb, err) => ({
  loader = () => null,
  dependencies = [],
  ...props
}) => {
  if (cb) {
    loader = loader || ld;
    ld = cb;
  }

  const Loader = loader;
  const ErrorHandler = err || (({ error }) => error);
  const [data, setData] = useState(<Loader {...props} />);
  useEffect(() => {
    Promise.resolve(ld(props))
      .then(data => setData(data || null))
      .catch(error => setData(<ErrorHandler error={error.message} />));
  }, dependencies);
  return data;
};
