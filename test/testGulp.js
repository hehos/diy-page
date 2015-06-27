/**
 * Created by hui on 2015/4/23.
 */

gulp.task('scripts',['clean'],function(){
    return gulp.src('./web/*.js')
        .pipe(utf8Convert({
            encNotMatchHandle:function(file){
            }
        }))
        .pipe(uglify().on('error',errorHandler))
        .pipe(concat('component_uglify.js'))
        .pipe(gulp.dest('./dist/hebingyasuo'))
});
gulp.task('clean',function(cb){
    del(['./dist/hebingyasuo'],cb)
});
// 定义一个prod任务作为发布或者运行时使用
gulp.task("prod",["clean"],function(){
    gulp.run('clean','scripts');
});

gulp.task("default",["clean"],function(){
    //执行任务
    gulp.run("prod");
});