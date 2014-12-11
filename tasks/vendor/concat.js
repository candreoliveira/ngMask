module.exports = {
  options: {
    separator: '',
  },
  dist: {
    src: [
      '<%= yeoman.app %>/app.js',
      '<%= yeoman.app %>/directives/mask.js',
      '<%= yeoman.app %>/services/*.js'
    ],
    dest: '<%= yeoman.dist %>/ngMask.js',
  },
};