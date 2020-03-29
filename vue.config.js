module.exports= {
  publicPath: './',
  outputDir:'static',
  pages: {
    index: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'main',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    test: {
      entry: 'src/pages/test/test.js',
      template: 'public/index.html',
      filename: 'test.html',
      title: 'test',
      chunks: ['chunk-vendors', 'chunk-common', 'test']
    }
  },
}