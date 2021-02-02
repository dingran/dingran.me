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
    // rehypePlugins: [require('rehype-mathjax')], // this doesn't work due to https://github.com/gatsbyjs/gatsby/issues/25013 and https://github.com/mdx-js/mdx/issues/1148 TODO: update this when mdx 2.0 comes out
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
