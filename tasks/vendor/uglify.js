module.exports = {
  dist: {
    options: {
      sourceMap: true,
      sourceMapName: '<%= yeoman.dist %>/ngMask.min.map'
    },
    files: {
      '<%= yeoman.dist %>/ngMask.min.js': ['<%= yeoman.dist %>/built.js']
    }
  }
}