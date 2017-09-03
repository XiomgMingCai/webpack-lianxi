# 前端自动化 学习笔记

#### browser-sync  前端修改热更新
>  sudo cnpm install browser-sync -g

>  browser-sync start --files "\*.\*" // 意思为监听当前目录下所有改动

#### [图片压缩收费版 (每月 500张免费)](https://tinypng.com/) tinyPNG
* 上传压缩
<!-- > sudo npm install -g tinypng-cli -->
<!-- > tinypng --key= \[邮件接收的key\]  //配置 key -->
<!-- > tinypng --myCount=500 -->
<!-- > tinypng --unlink  //删除配置 -->
* 前端HTML \<img>

#### js 混淆 压缩
>  sudo cnpm install uglify-js -g

>  uglifyjs dist/index.js  -o dist/index.min.js    //  压缩

>  uglifyjs dist/index.js  -m -o dist/index.min.js

#### less 编译 压缩

>  npm install less -g

>  sudo cnpm install less-plugin-clean-css -g   //压缩插件

>  lessc less/layout.less >  dist/layout.css --clean-css="advanced"    //编译 加 压缩

#### browserify 后端 打包 压缩

>  sudo npm install -g browserify

>  browserify  commonjs/index.js > dist/browserify_index.js  //压缩插件

#### babel-cli 后端 编译 打包 压缩

>  cnpm install babel-cli babel-preset-es2015 --save-dev

>   babel inde.js   //文件编译

>   babel src/ -d dist/   //目录编译

>   babel --watch  src/ -d dist/   //监听编译

>   babel-node src/index.js  //编译并执行

#### webpack 模块化打包环境

>  /Users/xiongmingcai/GitHub/webpack-lia-xi/node_modules/webpack/bin/webpack.js src/js/index.js assets/js/index.wp.js //手动编译
>  package.json 中 scripts 加入快捷



#### webpack 压缩