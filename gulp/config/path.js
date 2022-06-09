import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${builderFolder}/`,
    css: `${builderFolder}/`,
    js: `${builderFolder}/`,
    img: `${builderFolder}/img/`,
    fonts: `${builderFolder}/fonts/`
  },
  src: {
    html: `${srcFolder}/*.html`,
    css: `${srcFolder}/blocks/**/*.scss`,
    js: `${srcFolder}/app.js`,
    img: `${srcFolder}/img/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`
  },
  watch: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/blocks/**/*.scss`,
    js: `${srcFolder}/**/*.js`,
    img: `${srcFolder}/img/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`
  },
  clean: builderFolder,
  builderFolder: builderFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}