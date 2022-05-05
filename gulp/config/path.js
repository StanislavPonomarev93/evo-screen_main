import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    html: `${builderFolder}/`,
    css: `${builderFolder}/css/`,
    img: `${builderFolder}/img/`
  },
  src: {
    html: `${srcFolder}/*.html`,
    css: `${srcFolder}/blocks/**/*.scss`,
    img: `${srcFolder}/img/**/*.*`
  },
  watch: {
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/blocks/**/*.scss`,
    img: `${srcFolder}/img/**/*.*`
  },
  clean: builderFolder,
  builderFolder: builderFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}