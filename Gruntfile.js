module.exports = function(grunt) {
  'use strict';
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    min: {
      dist: {
        src: ['js/photoswipe.js', 'js/photoswipe-ui-default.js', 'js/app.js'],
        dest: 'js/sellmyapartment.min.js'
      }
    },
    cssmin: {
      dist: {
        src: ['css/normalize.css', 'css/skeleton.css', 'css/app.css', 'css/photoswipe.css', 'css/default-skin.css'],
        dest: 'css/sellmyapartment.min.css'
      }
    }
  };
  grunt.initConfig(gruntConfig);

  var keys = Object.keys(gruntConfig);
  var tasks = [];

  for(var i = 1, l = keys.length; i < l; i++) {
    tasks.push(keys[i]);
  }

  grunt.loadNpmTasks('grunt-yui-compressor');
  grunt.registerTask('default', tasks);
};