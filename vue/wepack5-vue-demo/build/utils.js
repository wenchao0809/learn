// const config = require('../config')
const path = require('path');

exports.assetsPath = function(_path) {
  // const assetsSubDirectory =
  // 	process.env.NODE_ENV === 'production' ? config.build.assetsSubDirectory : config.dev.assetsSubDirectory

  return path.posix.join('/', _path);
};

const resolve = function(dir) {
  return path.join(__dirname, '..', dir);
};

exports.resolve = resolve;
