var express = require('express');
var app = express();

// app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.sendFile('D:\\Projects\\Web Project 2\\test\\testh5\\k2.html')
});

app.get('/geturl', (req, res) => {
    res.json({
        "name": "网站",
        "num": 3,
        "sites": [
            { "name": "Google", "info": ["Android", "Google 搜索", "Google 翻译"] },
            { "name": "Runoob", "info": ["菜鸟教程", "菜鸟工具", "菜鸟微信"] },
            { "name": "Taobao", "info": ["淘宝", "网购ab"] }
        ]
    });
    // debugger;
});

app.listen(8081, () => { });