module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '<%= yeoman.dist %>/{,*/}*'
      ]
    }]
  },
  concat: {
    files: [{
      dot: true,
      src: [
        '<%= yeoman.dist %>/ngMask.js'
      ]
    }]
  }
}