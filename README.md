# fis-postprocessor-postcss
fis 的 [postcss](https://github.com/postcss/postcss) 插件。

## 使用
fis-config.js

```js
fis.config.merge({
    modules: {
        postprocessor : {
            sass: 'postcss',
            scss: 'postcss',
            css: 'postcss'
        }
    }
});
```