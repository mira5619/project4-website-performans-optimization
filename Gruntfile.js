module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.initConfig({
        htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'src/index.html'
      }
    }
  }

    });

  grunt.registerTask('default', ['htmlmin']);
};