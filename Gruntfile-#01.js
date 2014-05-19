module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-coffee');
  // Project configuration.
  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'assets/js/fBomb.js': ['assets/coffee/#01-coffeeBomb.coffee']
        }
      }
    }
  });
  // Default task.
  grunt.registerTask('default', 'coffee');
};