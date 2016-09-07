fis-postprocessor-postcss
=============

__fis 请使用 [fis3-postprocessor-postcss](https://github.com/jiangyuan/fis3-postprocessor-postcss)__ 。

fis 的 [postcss](https://github.com/postcss/postcss) 插件。
内置 [cssnext](http://cssnext.io/) 和 [autoprefixer](https://github.com/postcss/autoprefixer) 。

## 使用
### 安装
`npm i fis-postprocessor-postcss -g`

### 配置
```js
fis.config.merge({
    modules: {
        postprocessor : {
            css: 'postcss'
        }
    }
});
```

### 参数
```js
settings: {
    postprocessor: {
        postcss: {
            autoprefixer: false, // 默认 true
            cssnext: false, // 默认 false
            customPlugin: function(plugins) {   // 参数 plugins 是内置插件
                plugins = plugins.push(require('postcss-border'));
                return plugins; // 返回新的插件列表
            }
        }
    }
}
```

### demo 说明
安装完插件后，切换至 demo/src 目录下执行：
```
fis release -d dev [-mD]
```

## 关于 cssnext
目前还不能和 `sass` 混用，即 '.scss' 文件中不要掺杂 `cssnext` 语法。

## 关于 cssgrace
在 fis `postprocessor` 中， [cssgrace](https://github.com/cssdream/cssgrace) 处理图片路径有问题，不建议使用。
