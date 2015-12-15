var gulp = require("gulp");
var bs = require("browser-sync").create();
var ts = require("gulp-typescript");
var notify = require("gulp-notify");
var concat = require("gulp-concat");

var path = {
    ts:["Script/**/*.ts"],
    js:["Script/**/*.js"],
    html:["index.html"],
    build:["build/output.js","index.html"],
    all:["Script/**/*.ts","index.html"]
}

gulp.task("ts", function () {
   return gulp.src(path.ts)
      .pipe(ts())
      .pipe(gulp.dest("Script/"));
});

gulp.task("concat", function(){
    return gulp.src(path.js)
       .pipe(concat("output.js"))
       .pipe(gulp.dest("build"));
});

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });


});

gulp.task("init",["ts","concat","browser-sync","watch-all"]);

gulp.task("watch-all",function(){
    gulp.watch(path.ts,["ts"]);
    gulp.watch(path.js,["concat"]);
    gulp.watch(path.build,function(){
        console.log("reload")
        bs.reload();
    });
});
