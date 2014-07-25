// Generated on 2014-06-21 using generator-angular 0.9.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  var loadConfig = require('./tasks/config/loader.js');
  var config = {
    yeoman: require('./tasks/config/config.js'),
    pkg:    grunt.file.readJSON('package.json')
  };

  grunt.util._.extend(config, loadConfig('./tasks/vendor/'));

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load tasks on folder tasks
  grunt.loadTasks('tasks/custom');

  // Define the configuration for all the tasks
  grunt.initConfig(config);
};
