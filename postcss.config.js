module.exports = {
  plugins: {
      '@fullhuman/postcss-purgecss': {
          content: ['content/**/*.html', 'layouts/**/*.html'],
          whitelist: [
              'highlight',
              'language-bash',
              'pre',
              'video',
              'code',
              'content',
              'h3',
              'h4',
              'ul',
              'li',
              'is-active'
          ]
      },
      autoprefixer: {},
      cssnano: {preset: 'default'}
  }
};
