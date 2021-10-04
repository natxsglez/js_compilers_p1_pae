const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const tsc = require('gulp-typescript');

gulp.task('styles', function(done){
    return gulp.src('src/sass/**/*.scss')    //source
        .pipe(sass())                       //transform
        .pipe(gulp.dest('assets/styles'));  //dest
});

gulp.task('scripts', function(done){
    const tsConfig = tsc.createProject('tsconfig.json');
    return tsConfig.src()
        .pipe(tsConfig())
        .pipe(gulp.dest('assets/scripts'));
})

gulp.task('scripts:watch', gulp.series('scripts', function(done){
    gulp.watch('src/scripts/**/*.ts', gulp.series('scripts'));
    done();
}));

gulp.task('styles:watch', gulp.series('styles', function(done){
    gulp.watch('sass/**/*.scss', gulp.series('styles'));
    done();
}));

gulp.task('serve', gulp.parallel('styles:watch', 'scripts:watch'));

gulp.task('default', gulp.parallel('styles', 'scripts'), function(done) {
    done();
});