# test

## 项目说明
储备一些轮子。

### 1. 安装项目依赖
```
npm install
```

### 2. 开发模式（预览与调试）
```
npm run serve
```

### 3. 发行模式（打包）
```
npm run build
```

### 4. 一些文件说明

#### nodeapi文件夹存放测试中的nodejs API代码

#### autotest自动化流程及测试

此处使用nodejs + selenium + chromedriver，npm install已为您自动添加项目依赖，你可以直接运行自动化测试nodejs代码，同时您可以使用批处理文件保存cmd命令并使用schtasks命令将其添加为计划任务。
autopush.js提供上大健康路自动填报服务，请在确保身体健康的情况下使用。

#### dist存放目前版本打包完成的静态文件

将静态文件移动至Web服务器所规定的的静态文件根目录即可使用，或使用nodejs Express框架use(express.static())加载静态文件。
