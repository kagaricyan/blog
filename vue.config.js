module.exports= {
  publicPath: './',
  outputDir:'blog',
  pages: {
    index: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'inari的博客',
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