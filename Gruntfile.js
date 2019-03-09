module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['babel'],
        options: {
          spawn: false,
        },
      },
    },
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/js/app.js": "src/js/app.js"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["babel"]);
};