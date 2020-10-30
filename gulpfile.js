const   {gulp,src,dest,watch,series} = require('gulp');
const   sass = require('gulp-sass');
const   pug = require('gulp-pug');
const   livereload = require('gulp-livereload');
const   childProcess = require("child_process");
const   autoprefixer = require('gulp-autoprefixer');
// var jsmin = require('gulp-jsmin');
// var ts = require('gulp-typescript');
const babel = require('gulp-babel');
const htmlreplace = require('gulp-html-replace');

// var jeditor = require("gulp-json-editor");


    //cp.exec("start http://127.0.0.1:" + server.port)
// cp .execr

function xSassMini(){
    console.log("***********xSassMini*************")
    return src('src/sass/*.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(dest(`dist/css`))
        .pipe(livereload());
}


function xPugMini(){
    console.log("***********xPugMini*************")
    return src('src/pug/*.pug')
        .pipe(pug({pretty: false}))
        .pipe(htmlreplace({
            'css': 'css/style.css?nocach=' + (Math.floor(Math.random() * 10000000000) + 1),
            'js': 'js/script.js?nocach=' + (Math.floor(Math.random() * 10000000000) + 1)
        }))
        .pipe(dest('dist'))
        .pipe(livereload())

}


function cssLibs(){
    console.log("************cssLibs************")
    return src('src/css/*.css')
        .pipe(dest('dist/css/libs'))
        .pipe(livereload());
}

function fonts(){
    console.log("************fonts************")
    return src('src/css/fonts/*')
    .pipe(dest('dist/css/libs/fonts'))
}

function fonts2(){
    console.log("************fonts************")
    return src('src/css/webfonts/*')
    .pipe(dest('dist/css/libs/webfonts'))
}

function javascriptMini(){
    console.log("***********javascript*************")
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env'],
            comments: false,
            minified: true
        }))
        .pipe(dest(`dist/js/`))
        .pipe(livereload());
}


function javaScriptLibs(){
    console.log("************javaScriptLibs************")
    return src('src/js/libs/*.js')
    .pipe(dest('dist/js/libs'))
    .pipe(livereload());
}


function imgs(){
    console.log("************imgs************")
    return src('src/assets/imgs/**')
        .pipe(dest('dist/assets/imgs'))
        .pipe(livereload());
}


function server(){
    console.log("***********server*************")
    require('./server.js')
}






// function funHTMLReplace() {
//     return src('index.html')
//       .pipe(htmlreplace({
//           'css': 'styles.min.css',
//           'js': 'js/bundle.min.js'
//       }))
//       .pipe(dest('build/'));
//   }







function exAll(){
    console.log("***********exports.default*************")
    childProcess.exec('rmdir dist /S /Q')
    setTimeout(function(){
        xSassMini()
        cssLibs()
        fonts()
        xPugMini()
        javascriptMini()
        javaScriptLibs()
        imgs()
        server()
        fonts2()
        livereload.listen();
        watch('src/sass/*.sass',series(xSassMini,xPugMini));
        watch(['src/pug/*.pug','src/pug/**/*.pug'], series(xPugMini));
        watch('src/js/*.js', series(javascriptMini,xPugMini));
    },3000)
}




exports.default = series(exAll)

