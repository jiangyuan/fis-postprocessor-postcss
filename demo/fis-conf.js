
fis.config.merge({
    project: {
        include: ['css/**']
    },

    modules: {
        parser: {
            'sass': 'sass',
            'scss': 'sass'
        },

        postprocessor: {
            css: 'postcss'
        }
    },

    deploy: {
        dev: {
            to: '../dev'
        },
        dist: {
            to: '../dist'
        }
    },

    settings: {
        postprocessor: {
            postcss: {
                autoprefixer: true,
                cssnext: false,
                customPlugin: function(plugins) {
                    plugins = plugins.push(require('postcss-border'));
                    return plugins;
                }
            }
        }
    }
});