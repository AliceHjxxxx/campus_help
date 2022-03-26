const express = require('express');
const userRouter = require("./router/user")
const helpRouter = require("./router/help")
const app = express();
const bodyParser = require('body-parser');

app.use( require('cors')() )
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(userRouter)
app.use(helpRouter)

app.listen(8888, (req, res) => {
    console.log("后端服务器启动于:")
    console.log("http://localhost:8888")
});