import gulp, { series } from "gulp";

import { path } from "./gulp/config/path.js";

import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}


import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf } from "./gulp/tasks/fonts.js"; // работает только как копия

//const fonts = gulp.series(ttfToWoff2, fontsStyle);

/*function watcher(){
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.otfToTtf, otfToTtf);
} */

const mainTasks = gulp.parallel(otfToTtf, html, scss, js, images); 
const dev = gulp.series(reset, mainTasks, gulp.parallel(server));

gulp.task('default', dev);