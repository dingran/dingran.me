import React from 'react';
import rangeParser from 'parse-numeric-range'; //https://prince.dev/highlight-with-react
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

// Create a closure that determines if we have
// to highlight the given index
const calculateLinesToHighlight = (meta) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

export default function Code({ children, className, metastring }) {
  const language = className.replace(/language-/, '');
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()} // without trim somehow there is alwasy an empty line
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: '20px',
            overflow: 'auto',
            fontSize: '14px',
          }}
        >
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index });
            if (shouldHighlightLine(index)) {
              lineProps.className = `${lineProps.className} highlight-line`;
            }
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
