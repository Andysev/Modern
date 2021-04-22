let gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require('gulp-rename');
const autoPrefixer = require('gulp-autoprefixer');


gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
	 .pipe(sass({outputStyle: 'compressed'}))
	 .pipe(rename({suffix: '.min'}))
	 .pipe(autoPrefixer({
		 overriderBrowerslist: ['last 8 versions']
	 }))
	 .pipe(gulp.dest('app/css'))
	 .pipe(browserSync.reload({stream: true}))
});

gulp.task('css', function(){
	return gulp.src([
	  'node_modules/normalize.css/normalize.css',
	  'node_modules/slick-carousel/slick/slick.css',
	  'node_modules/magnific-popup/dist/magnific-popup.css'
	])
	  .pipe(concat('_libs.scss'))
	  .pipe(gulp.dest('app/scss'))
	  .pipe(browserSync.reload({stream: true}))
  });

gulp.task('html', function(){
	return gulp.src('app/*.html')
	
	.pipe(browserSync.reload({stream: true}))
	});

gulp.task('js', function(){
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
		'node_modules/mixitup/dist/mixitup.js'
		
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	// .pipe(browserSync.reload({stream: true}))
	});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
		});
	});

gulp.task('watch', function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
	gulp.watch('app/*.html', gulp.parallel('html'));
	gulp.watch('app/js/*.js', gulp.parallel('js'))
	});



gulp.task('default', gulp.parallel('css', 'js', 'scss',  'browser-sync', 'watch'))