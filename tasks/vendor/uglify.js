module.exports = {
  dist: {
    options: {
      sourceMap: true,
      compress: true,
      sourceMapName: '<%= yeoman.dist %>/ngMaskBr.min.map'
    },
    files: {
      '<%= yeoman.dist %>/ngMaskBr.min.js': ['<%= yeoman.dist %>/ngMaskBr.js']
    }
  }
}