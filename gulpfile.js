'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var exec = require('child_process').exec;

var files = ['manifest.json', 'background.js'];
var xpiName = 'catgifs.xpi';

gulp.task('default', function () {
    gulp.src(files)
        .pipe(zip(xpiName))
        .pipe(gulp.dest('.'));
});

gulp.task('try', function () {
    exec('web-ext run --firefox=nightly --firefox-profile=dev');
});