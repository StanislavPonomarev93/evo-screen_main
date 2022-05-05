import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { img } from "./gulp/tasks/img.js";

global.app = {
  path: path,
  gulp: gulp
}

function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(html, scss, img);

const dev = gulp.series(reset, mainTasks, watcher)

gulp.task('default', dev);