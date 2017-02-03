var dest = "./public/build";
var src = "./public";
var path = require("path");

module.exports = {
  nodemon: {
    script: "./server.js"
  },
  browserSync: {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*", "static/**/*.*"],
    browser: "google chrome",
    port: 7000
  },
  less: {
    src: src + "/style/main.less",
    watchPath: "./**/*.less",
    dest: dest + "/style",
    settings: {
      imagePath: "images" // Used by the image-url helper
    },
    outputName: "bundle.css",
    paths: [ path.join(__dirname, "node_modules/bootstrap/less") ]
  },
  js: {
    bundleConfigs: [
      {
        entries: src + "/js/Index.js",
        dest: dest + "/js",
        outputName: "bundle.js"
      },
      {
        entries: src + "/js/page.js",
        dest: dest + "/js",
        outputName: "page.bundle.js"
      }
    ]
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  html: {
    src: "./static/*.html"
  },
  fonts: {
    src: src + "/fonts",
    dest: dest + "/style/fonts"
  },
  production: {
    css: {
      src: dest + "/style/*.css",
      outputName: "bundle.min.css",
      dest: dest + "/style"
    },
    js: [
      {
        src: dest + "/js/bundle.js",
        outputName: "bundle.min.js",
        dest: dest + "/js"
      },
      {
        src: dest + "/js/page.bundle.js",
        outputName: "page.bundle.min.js",
        dest: dest + "/js"
      }
    ]
  }
};
