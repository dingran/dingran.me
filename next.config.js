const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-math'),
      require('remark-code-titles'),
      require('remark-capitalize'),
      require('remark-slug'),
      require('remark-autolink-headings'), //TODO: fix; doesn't actually work, ancher didn't wrap the text
    ],
    rehypePlugins: [require('rehype-katex')],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
