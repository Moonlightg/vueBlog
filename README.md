:running:vueBlog:running:
============

方便自己，也方便他人，好好学习，天天向上。

## 目录

* [安装git](https://github.com/Moonlightg/mb/issues/15)
* [安装node](#安装node)
* [安装淘宝镜像cnpm](#安装淘宝镜像cnpm)
* [本地运行](#本地运行)
* [打包上传运行](#打包上传运行)

## Demo

> [Moonlight的个人博客](https://moonlightg.github.io/mb)

## 使用方法

#### 下载项目到本地
```
git clone https://github.com/Moonlightg/vueBlog.git
```
#### 本地运行

> 1.安装依赖

```
npm install
```
安装了cnpm就用
```
cnpm install
```

> 2.在本地开启服务，然后就可以通过 http://localhost:8084 访问了

```
npm run dev
```
> 3.[创建 OAuth Application](https://github.com/settings/applications/new)

3.1 

![image](https://user-images.githubusercontent.com/14285531/30852074-2d843fa0-a2dd-11e7-8fd2-7e701e171428.png)

3.2

![image](https://user-images.githubusercontent.com/14285531/30852109-49c09146-a2dd-11e7-9b9f-b2855a247fa1.png)

3.3

![image](https://user-images.githubusercontent.com/14285531/30852131-58457308-a2dd-11e7-90cd-f5b756c684d4.png)

3.4

![image](https://user-images.githubusercontent.com/14285531/30852226-a2559360-a2dd-11e7-9e88-4c786ca44f1b.png)

3.5

![image](https://user-images.githubusercontent.com/14285531/30852245-b5330cce-a2dd-11e7-9e09-9911b1ccfb47.png)

3.6
![image](https://user-images.githubusercontent.com/14285531/30853978-e34cab2e-a2e2-11e7-97c7-9d9d1dd89136.png)
![image](https://user-images.githubusercontent.com/14285531/30854002-f5c1564c-a2e2-11e7-94aa-60ae18ad8d3f.png)
![image](https://user-images.githubusercontent.com/14285531/30854020-03ad812c-a2e3-11e7-9b90-d2e37eec3715.png)



> 4.个人配置 - 修改「vue/src/store/account.js」文件中的「state」属性

```JavaScript
const state = {
  accessToken: localStorage.getItem(LS_KEY_ACCESS_TOKEN),  // 这个不要修改，这个不要修改，这个不要修改。当前登录用户的 GitHub AccessToken
  auth: {
    proxy: 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', // 这个不要修改，这个不要修改，这个不要修改。
    clientID: '5b4cde4044d29cc1678d',   // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client ID
    clientSecret: 'd506c402b90890d4cc584b1730623b0a8726ddd9'  // 改成你在 https://github.com/settings/applications/new 新建的 OAuth application 的 Client Secret
  },
  gitHubUser: null,  // 这个不要修改，这个不要修改，这个不要修改。
  gitHubUsername: 'Moonlightg',  // 修改成你自己的 GitHub 账号
  copyright: '2017 - 2017',  // 修改成你自己的
  recordNumber: 'null',  // 修改成你自己的备案编号，如果没有备案的话就设置为 null
  repo: 'Moonlightg/mb',  // 记录 Issue 的仓库的全名「用户名/仓库名」
  pageSize: 10,  // 博客列表每页显示多少条博客
  showQQGroup: true,  // 如果要显示你自己的 QQ 群二维码图片的话这里配置成 true 并且替换「BGAIssueBlog-Web/static/img/qq-group.png」为你自己的 QQ 群二维码图片，否则配置成 false 即可
  thirdPartySite: [  // 配置你想在左上角展示的第三方站点信息
    {
      img: 'static/img/github.png',  // 第三方站点图标，存放在「BGAIssueBlog-Web/static/img」目录中
      url: 'https://github.com/Moonlightg'  // 第三方站点的 url
    },
    {
      img: 'static/img/weibo.png',
      url: 'http://weibo.com/MoonlightGjb'
    }
    // 如果还有其他站点需要显示，继续在这里追加
  ]
}
```
> 5.个人配置 - 修改网站图标

```
修改「vueeBlog/static/img/favicon.ico」文件
```
> 6.个人配置 - 修改网站标题

```
修改「vue/index.html」文件里「<title>」标签里的内容
```

#### 发布到 GitHub Pages

> 1.打包

```
npm run build
```
> 2.发布

```
拷贝「vueBlog/docs」目录里的所有文件到「GitHub Pages」的根目录下
并将「GitHub Pages」仓库 PUSH 到 GitHub 上
```
#### 打包发布小白详细步骤

> 1.在GitHub 上创建一个仓库 [myblog]

![image](https://user-images.githubusercontent.com/14285531/30853452-6beb12e2-a2e1-11e7-88f0-1c7266c8d699.png)
![image](https://user-images.githubusercontent.com/14285531/30853458-704ab360-a2e1-11e7-8360-112dab04e22e.png)

> 2.把myblog 检出到本地
![image](https://user-images.githubusercontent.com/14285531/30853462-73f4f7d2-a2e1-11e7-877e-28d301e769f7.png)

> 3.把打包好的「vueBlog/docs」目录里的所有文件拷贝到「myblog」的根目录下

> 4.git bash 按顺序执行以下命令
```
安装git后配置
git config --global user.name "你的github用户名"

git config --global user.email "你的github绑定的邮箱"
```

4.1.`git status`

4.2.`git add .`

4.3.`git status`

4.4.`git commit -m "modify"`

4.5.`git pull`

4.6.`git push`
