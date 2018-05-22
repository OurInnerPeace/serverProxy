# serverProxy 1.1.0
简单的服务器代理 - 使用本地（服务器）的默认浏览器打开所请求的网址。

### 使用方法：
    1. 启动该服务
```sh
    node serverProxy_1.1.0.js
```
  
    2. 使用以下格式发送请求到该服务
```sh
    http://yourserver:9519/address={yoururl}&browser={browser}
```
    例：
```sh
    http://127.0.0.1:9519/address=http://baidu.com&browser=chrome
```
    {yoururl}:  http://XXXXXX
    {browser}:  chrome / iexplore / default

### 返回值（String）：
    1. 请求成功: Success
    2. 请求失败: Failed

### 注意：
    1. Node version: V8.11.1
    2. address属性赋值： 必须以"http://"开头，且目前仅支持http请求
    3. 不指定browser时，使用默认浏览器打开

### License: MIT
