const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-math'),
      require('remark-code-titles'),
      require('remark-capitalize'),
      require('remark-slug'),
      [require('remark-autolink-headings'), { behavior: 'wrap' }],
    ],
    rehypePlugins: [require('rehype-katex')],
    // rehypePlugins: [require('rehype-mathjax')], //mathjax doesn't seem to work
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['images.unsplash.com'],
  },
});
