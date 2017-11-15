var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    htmlmin     = require('gulp-htmlmin');

/**
 * HTML minify
 */
gulp.task('minify-html', () => {
    return gulp.src('public/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            removeComments: true,
            useShortDoctype: true,
            ignorePath: '/js/mj',
            processScripts: ['application/ld+json','application/json']
        }))
        .pipe(gulp.dest('./public'))
})

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['minify-html']);
