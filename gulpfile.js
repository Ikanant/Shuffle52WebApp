var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('serve', function(){
   var options = {
       // What is going to run
       script: 'index.js',
       delayTime: 1,
       env: {
           'PORT': 3000
       },
       watch: jsFiles
   }

    return nodemon(options).on('restart', function(ev){
        console.log('Restarting...');
    })
})
