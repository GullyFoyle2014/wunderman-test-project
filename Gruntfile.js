module.exports = function(grunt) {
 
  // Project configuration.
  grunt.initConfig({
    // This line makes your node configurations available for use
    pkg: grunt.file.readJSON('package.json'),
    // This is where we configure JSHint
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      myFiles: ['js/*.js']
    },
    sass: {
        dist: {
            options: {
                style: 'expanded'
            },
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.scss'],
              dest: 'css/compiled',
              ext: '.css'
          }]
        }
    },
    concat: {
      js: {
        src: 'js/*.js',
        dest: 'js/concat/testproject_cat.js'
      },
      css: {
        src: 'css/compiled/*.css',
        dest: 'css/compiled/concat/testproject_cat.css'
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/compiled/concat',
          src: ['testproject_cat.css', '!*.min.css'],
          dest: 'css/compiled/concat/min',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/concat/min/testproject_cat.min.js': ['js/concat/testproject_cat.js']
        }
      }
    }
  });
  // Each plugin must be loaded following this pattern
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint','sass','concat','cssmin','uglify']); 
};
