module.exports = {
  options: {
    separator: '',
  },
  dist: {
    src: [
      '<%= yeoman.app %>/app.js',
      '<%= yeoman.app %>/directives/mask.js',
      //'<%= yeoman.app %>/services/comparatorService.js',
      //'<%= yeoman.app %>/services/patternService.js',
      '<%= yeoman.app %>/services/maskService.js'
    ],
    dest: '<%= yeoman.dist %>/ngMask.js',
  },
};