// node r.js -o build.js

({
  appDir: './',
  baseUrl: './',
  dir: './dist',
  separateCSS: true,
  mainConfigFile: './main.js',
  modules: [
    {
      name: 'main',
      exclude: [
        'lib/require-css/normalize'
      ]
    }
  ],
  fileExclusionRegExp: /^(r|build)\.js$/,
  optimizeCss: 'standard',
  removeCombined: true
})