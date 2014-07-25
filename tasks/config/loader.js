module.exports = function(path) {
  var glob = require('glob'),
      object = {},
      key;

  glob.sync('*.js', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require('../../' + path + option);
  });

  return object;
}