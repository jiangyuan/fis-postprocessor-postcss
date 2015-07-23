var postcss = require('postcss');
var P = {
    autoprefixer: require('autoprefixer'),
    cssnext: require('cssnext')()
};

var def = {
    cssnext: false,
    autoprefixer: false,
    customPlugin: function () {}
};

module.exports = function (content, file, conf) {
    if (file.isCssLike) {
        var opts = fis.util.merge(def, conf);
        var plugins = [];

        if (opts.cssnext) {
            plugins.push(P.cssnext);
            opts.autoprefixer = false;  // cssnext 自带 autoprefixer
        }

        if (opts.autoprefixer) {
            plugins.push(P.autoprefixer);
        }

        var tmp = opts.customPlugin.call(this, plugins, content, file, conf);
        if (Array.isArray(tmp) && tmp.length) {
            plugins = tmp;
        }

        if (!plugins.length) {
            return content;
        }

        content = postcss(plugins).process(content).css;
    }

    return content;
};