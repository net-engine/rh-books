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
        tasks: ['compass'],
        options: {
          livereload: {
            port: 32145
          },
          force: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'source/sass',
          cssDir: 'docs/Common_Content/css/',
          environment: 'production'
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**']
    },
    webfont: {
      icons: {
        src: 'source/icons/svg/*',
        dest: 'docs/Common_Content/icons',
        destCss: 'source/sass/icons',
        options: {
          font: 'redhat-books-icons',
          stylesheet: 'scss',
          syntax: 'bootstrap',
          relativeFontPath: '../icons'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-webfont');

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  grunt.registerTask('default', ['connect', 'compass', 'watch']);
  grunt.registerTask('build', ['compass', 'webfont', 'gh-pages']);
}
