module.exports = function(grunt){
  grunt.registerTask('dist', 'Generate min file', function (target) {
    return grunt.task.run(['clean:dist', 'concat:dist', 'uglify:dist', 'copy:dist', 'copy:bower']);
  });
}