module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          base: ''
        }
      }
    },
    watch: {
      css: {
        files: ['source/sass/**/*'],
        tasks: ['compass:dev'],
        options: {
          livereload: true,
          force: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'dist/stylesheets',
          environment: 'production'
        }
      },
      dev: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'dist/stylesheets'
        }
      }
    },
    webfont: {
      icons: {
        src: 'source/icons/svg/*',
        dest: 'dist/icons',
        destCss: 'source/sass/icons',
        options: {
          font: 'redhat-icons',
          stylesheet: 'scss',
          syntax: 'bootstrap',
          relativeFontPath: '/dist/icons'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webfont');

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('default', ['connect', 'compass', 'watch']);
  grunt.registerTask('build', ['compass']);
}
