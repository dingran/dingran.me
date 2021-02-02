const vfile = require('to-vfile');
const unified = require('unified');
const parse = require('rehype-parse');
const mathjax = require('rehype-mathjax');
const stringify = require('rehype-stringify');

const options = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    tags: 'ams',
  },
  svg: {
    fontCache: 'global',
  },
};

const options2 = {
  inlineMath: [
    ['$', '$'],
    ['\\(', '\\)'],
  ],
};

unified()
  .use(parse, { fragment: true })
  .use(mathjax, options2)
  .use(stringify)
  .process(vfile.readSync('example.html'), function (err, file) {
    if (err) throw err;
    console.log(String(file));
  });
