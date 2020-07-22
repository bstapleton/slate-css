const gulp = require('gulp');
const sass = require('gulp-sass');
const strip = require('gulp-strip-css-comments');
const clean = require('gulp-clean-css');

// Paths
let scssPath = "scss/";
let cssPath = "css/";

gulp.task("default", function(done) {
    console.log("Generate CSS files " + (new Date()).toString());
    gulp.src(scssPath + 'vendor/bootstrap/bootstrap-grid.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(cssPath));
    gulp.src(scssPath + 'themes/dark.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(strip())
        .pipe(gulp.dest(cssPath + "themes/"))
        .pipe(clean({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize} default`);
            console.log(`${details.name}: ${details.stats.minifiedSize} minified`);
        }))
        .pipe(gulp.dest(cssPath + 'dist/themes/'));
    gulp.src(scssPath + 'themes/light.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(strip())
        .pipe(gulp.dest(cssPath + 'themes/'))
        .pipe(clean({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize} default`);
            console.log(`${details.name}: ${details.stats.minifiedSize} minified`);
        }))
        .pipe(gulp.dest(cssPath + 'dist/themes/'));
    done();
});

gulp.task("import", function(done) {
    gulp.src(cssPath + 'themes/dark.css')
        .pipe(gulp.dest('../uxingames/public/css/themes/'));
    done();
});