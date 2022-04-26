# my-first-react-setup
第一次react脚手架搭建及常见问题解决

1，搭建步骤如下
准备工作：你需要在你的机器上安装 Node >= 8.10 和 npm >= 5.6.

第一步，安装react脚手架工具 create-react-app

	命令：npm install -g create-react-app

第二步，利用 create-react-app 脚手架工具创建react项目

	随便建一个react项目工程文件夹，并在文件夹下面cmd：create-react-app 项目名称

	这个过程需要花费一点时间，因为下载所需的模块modules比较多（大）

第三步，运行react项目
	npm start

	运行成功效果如下：
	
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/01.png)

	默认端口3000，项目启动后，自动跳转到默认的浏览器中，地址：http://localhost:3000


二、结构说明：
	（1）Web首页入口文件：index.html
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/02.png)
	（2）App 组件中DOM元素的(className)样式
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/03.png)
	（3）App.js（函数定义组件）
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/04.png)
	（4）index.js（react渲染组件，将组件的内容描述绑定到制定的DOM上）
 	有了App组件后，我们要怎么用它呢？
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/05.png)
	（5）serviceWorker.js（）
	这个是什么鬼？ 有什么作用呢？

	摘自网络：
       		 service worker是在后台运行的一个线程，可以用来处理离线缓存、消息推送、后台自动		更新等任务。registerServiceWorker就是为react项目注册了一个service worker，用来做资源的缓		存，这样你下次访问时，就可以更快的获取资源。而且因为资源被缓存，所以即使在离线的情况下也可		以访问应用（此时使用的资源是之前缓存的资源）。注意，registerServiceWorker注册的service 		worker 只在生产环境中生效（process.env.NODE_ENV === ‘production’）

	为什么要选择react呢？
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/06.png)

2.安装react脚手架失败的原因，及解决办法!
	1.问题1：

	输入指令后，显示不是“ 不是内部或外部命令”？

	解决办法：

	在正常情况下，先要安装node环境

	2.问题2
	在此步骤过程中，若出现如下提示，
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/07.png)

	解决办法：
	（1）卸载全局安装包：
	npm uninstall -g create-react-app
	或者
	yard global remove create-react-app

	然后使用 旧的cli 测试一下 => create-react-app --version，如果执行了就说明 安装包还存在。—	— 卸载就好。
	如果返回了 一个路径如/ usr / local / bin / create-react-ap 就使用 rm -rf / usr / local / bin / 	create-react-app 手动删除

	（2）忽略本地cil 直接执行
	npx --ignore-existing create-react-app my-app

	3.问题3
	在继续执行全局安装命令后出现如下情况
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/08.png)
	
	解决办法
	更新，此为版本太低，更新一下就好了
	npm install -g npm@latest

	4.问题4

	如果你之前本地安装过webpack，受版本冲突限制，安装react脚手架后项目启动不了的问题。
	启动时报错如下
	![maze](https://github.com/cjf0803/my-first-react-setup/blob/main/Imgs/09.png)

	造成问题原因：

	webpack版本不一致问题。create-react-app所需要的webpack版本为4.41.5版本，而我本地安装的		并不是这个版本。

	解决方法：

	先卸载不符合版本的webpack 与 webpack-dev-server，再安装相应版本的即可。
	命令为：

	卸载
	npm uninstall webpack
	npm uninstall webpack-cli
	npm uninstall webpack-dev-server

	再次安装符合要求的版本即可。
	npm i webpack@4.41.5
	npm i webpack-cli
	npm i webpack-dev-server@3.10.2







