'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');
var notify = require('gulp-notify');
var config = require('./config');

gulp.task('styles', function () {
  gulp.src(config.scssEntryFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(config.cssDir))
    .pipe(reload({stream:true}))
    .pipe(size())
    .pipe(notify('Sass compilation complete.'));
});