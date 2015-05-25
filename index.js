var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
// var cssnext = require('cssnext');
var cssgrace = require('cssgrace');

module.exports = function (content, file, conf) {

    if (file.isCssLike) {
        content = postcss([autoprefixer, /*cssnext, */cssgrace]).process(content).css;
        console.log('-------------');
        console.log(content);
    }

    return content;
};