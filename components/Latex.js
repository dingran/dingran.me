//https://louisrli.github.io/blog/2020/06/04/react-mathjax/

import React from 'react';

const getMathJax = () => window.MathJax;

const typeset = (selector) => {
  const mathJax = getMathJax();
  // If MathJax script hasn't been loaded yet, then do nothing.
  if (!mathJax) {
    return null;
  }
  mathJax.startup.promise = mathJax.startup.promise
    .then(() => {
      selector();
      return mathJax.typesetPromise();
    })
    .catch((err) => console.error(`Typeset failed: ${err.message}`));
  return mathJax.startup.promise;
};

const Latex = ({ rawLatex }) => {
  const ref = React.createRef();
  React.useEffect(() => {
    typeset(() => ref.current);
  }, [rawLatex]);

  return <span ref={ref}>{rawLatex}</span>;
};

export default React.memo(Latex);
