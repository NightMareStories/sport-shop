let preprocessor = 'scss';

const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

function browser_sync() {
    browserSync.init({
        server: { baseDir: 'app/' },
        notify: false,
        online: true
    })
}

function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())

}

function styles_main() {
    return src([
        'app/css/main.' + preprocessor
    ])
        .pipe(sourcemaps.init())
        // .pipe(eval(preprocessor)())
        .pipe(concat('main.min.css'))
        .pipe(cleanCSS(({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())

}

function styles_media() {
    return src([
        'app/css/media.' + preprocessor
    ])
        .pipe(sourcemaps.init())
        // .pipe(eval(preprocessor)())
        .pipe(concat('media.min.css'))
        .pipe(cleanCSS(({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())

}

function styles_fonts() {
    return src([
        'app/css/fonts/fonts.' + preprocessor
    ])
        .pipe(sourcemaps.init())
        // .pipe(eval(preprocessor)())
        .pipe(concat('fonts.min.css'))
        .pipe(cleanCSS(({ level: { 1: { specialComments: 0 } }/* , format: 'beautify' */ })))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('app/css/fonts'))
        .pipe(browserSync.stream())

}

function images() {
    return src(['app/img/src/**/*'])
        .pipe(newer('app/img/min_images'))
        .pipe(imageMin())
        .pipe(dest('app/img/min_images'))

}

function cleanImages() {
    return del(['app/img/src/*'])
}

function buildCopy() {
    return src([
        'app/css/main.min.css',
        'app/css/media.min.css',
        'app/css/fonts/**',
        '!app/css/fonts/*.less',
        'app/js/main.min.js',
        'app/img/min_images/**/*',
        'app/*.html'
    ], { base: 'app' })
        .pipe(dest('build-project'))
}
function startWatch() {
    watch('app/js/main.js', scripts);
    watch('app/css/main.' + preprocessor, styles_main);
    watch('app/css/media.' + preprocessor, styles_media);
    watch('app/css/fonts/fonts.' + preprocessor, styles_fonts);
    watch('app/index.html').on('change', browserSync.reload);
}


exports.browser_sync = browser_sync;
exports.scripts = scripts;
exports.styles_main = styles_main;
exports.styles_media = styles_media;
exports.styles_fonts = styles_fonts;
exports.images = images;
exports.cleanImages = cleanImages;
exports.build = series(styles_main, styles_media, styles_fonts, scripts, buildCopy);

exports.default = parallel(styles_main, styles_media, styles_fonts, scripts, browser_sync, startWatch);