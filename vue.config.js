module.exports = {
    pages: {
        // 先配置主页
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            title: '主页'
        },
        // 再配置各个子页面
        createHelp: {
            entry: './src/pages/createHelp/createHelp.js',
            template: './public/createHelp.html',
            title: '创建帮助'
        },
        HelpMall: {
            entry: './src/pages/HelpMall/HelpMall.js',
            template: './public/HelpMall.html',
            title: '帮助大厅'
        },
        myHelp: {
            entry: './src/pages/myHelp/myHelp.js',
            template: './public/myHelp.html',
            title: '我的帮助'
        },
        Personnal: {
            entry: './src/pages/Personnal/Personnal.js',
            template: './public/Personnal.html',
            title: '个人信息'
        },
        Register: {
            entry: './src/pages/Register/Register.js',
            template: './public/Register.html',
            title: '注册'
        },
    },
    publicPath: './'
}
