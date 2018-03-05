#说明
懒加载主要目的作为服务器前端的优化,减少请求数或延迟请求数
先将img的src地址赋给data-url,现在页面中占位
img的src属性指向服务器地址，当浏览器从上往下读取到src的地址时，就会加载图片
当图片加载完成，再渲染到浏览器上

#服务端
server文件存放node文件
请求的端口号为3000
node pic.js启动node服务器
将前端上传的图片存放到本地文件夹中，并且将存储路径保存到数据库中


#前端
ajax请求
npm install http-server -g
http-server -p 3001
在浏览器访问localhost:3001


