'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('./config');

gulp.task('serve', ['styles', 'scripts'], function () {
  browserSync({
    proxy: config.localUrl,
    online: true,
    xip: true
  });
});