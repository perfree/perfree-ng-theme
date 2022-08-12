## PerfreeNgTheme
基于PerfreeBlog系统写的使用angular编写主题的案例
## 使用方法
下载Releases包直接前往PerfreeBlog安装主题即可
## 源码运行
```
npm install
npm run start
```
## 打包
```
npm run build
之后将dist/perfree-ng-theme压缩为zip文件即可
```
## 开发主题注意事项
1. 要保证项目打包后根目录存在index.html和theme.properties文件
2. 路由尽量和后台保持一致
3. theme.properties中type属性配置为angular或者vue
4. 如前端项目定义后端没有的路由,要以/html/开头,否则会404
5. 后台页面管理添加的自定义页面如友链页,需要在根目录创建page目录并在里边存放一个对应url的空html文件,如link.html
6. 如主题有一些用户可以自定义的功能,可在根目录增加setting.html文件,以便用户设置,用户设置完毕后可通过配置相关接口获取用户设置的信息

> 使用vue/react开发主题同理~