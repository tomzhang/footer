
# 58footer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 页脚引入方法

> api.config.js 添加 footerDomain: 'http://footer.test.58coin.com'
> api.config.js.dev 添加 footerDomain: 'http://footer.test.58coin.com'
> api.config.js.prod 添加 footerDomain: 'https://footer.58coin.com'
> api.config.js.test 添加 footerDomain: 'http://footer.test.58coin.com'



```javascript
<!-- html部分 -->
<div id="parent-footer">
    <iframe style="position:absolute;" :src="ifreamSrc" frameborder="0" width="100%" id="footer" name="footer" framespacing="0" :height="ifreamHeight" scrolling="no"></iframe>
</div>
```

ifreamSrc 页脚连接
ifreamHeight： 页脚传回的高度
style="position:absolute;" 必须有 解决底部多出的几像素

```javascript
<!-- 添加函数 -->
postIfream () {
    let postMessage = {
    "language": this.$i18n.locale,
    'color': '#121723',// 页脚的背景色（注：主站和合约的页脚颜色不一样）
    'href': window.location.origin// 本站地址
    }
    if (document.getElementById('footer') && document.getElementById('footer').attachEvent) {
    document.getElementById('footer').attachEvent("onload", () => { // IE 判断ifream是否加载完 
        setTimeout(() => {
        window.frames.footer.postMessage(postMessage, 'http://footer.test.58coin.com')
        }, 100)
    })
    } else {
    document.getElementById('footer').onload = () => { // 非IE 判断ifream是否加载完 
        setTimeout(() => {
        window.frames.footer.postMessage(postMessage, 'http://footer.test.58coin.com')
        }, 100)
    }
    }
}
```

> window.frames.footer.postMessage('需要传给页脚的参数'，'页脚的地址')

```javascript
<!-- 调用 -->
setTimeout(() => {
    this.postIfream()
}, 100)
// 在切换语言、和mounted中调用，尽量用setTimeout
let postMessage = {
    "language": this.$i18n.locale,
    'color': '#121723',// 页脚的背景色（注：主站和合约的页脚颜色不一样）
    'href': window.location.origin
}
setTimeout(() => {
    window.frames.footer.postMessage(postMessage, 'http://footer.test.58coin.com')
})

<!-- 父页面监听子页面函数 -->
window.addEventListener('message',(e) => {
    if (e.data && e.data.height) {
    this.ifreamHeight = e.data.height
    }
}, false)

```