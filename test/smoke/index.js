const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const Mocha = require('mocha');

process.chdir(path.join(__dirname, 'template'));

const prodConfig = require('../../lib/webpack.prod');

const mocha = new Mocha({
  timeout: '10000ms',
});

rimraf('./dist', () => {
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false,
    }));
    console.log('webpack build success, begin run mocha');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js-test.js'));
    mocha.run();
  });
});
