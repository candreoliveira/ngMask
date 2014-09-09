module.exports = {
  dist: {
    expand: true,
    cwd: 'dist/',
    src: '**',
    dest: 'examples/dist',
    filter: 'isFile'
  },
  bower: {
    expand: true,
    cwd: 'bower_components',
    src: '**',
    dest: 'examples/bower_components'
  }
}