const express = require('express');
const route = express.Router();
const sql = require('../db/sqlMap');
const pool = require('../db/db')


/************************************ 

        按关键词搜索帮助信息

*************************************/

//搜索
route.post("/api/searchHelp_waiting", (req, res) => {
    let sqlStr = sql.help.searchHelp_waiting;
    let kwd = "%" + req.body.keyWord + "%"
    //连接数据库
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        // 查询
        connection.query(sqlStr, kwd, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})
route.post("/api/searchHelp_doing", (req, res) => {
    let sqlStr = sql.help.searchHelp_doing;
    let kwd = "%" + req.body.keyWord + "%"

    //连接数据库
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        // 查询
        connection.query(sqlStr, kwd, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})
route.post("/api/searchHelp_finished", (req, res) => {
    let sqlStr = sql.help.searchHelp_finished;
    let kwd = "%" + req.body.keyWord + "%"

    //连接数据库
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        // 查询
        connection.query(sqlStr, kwd, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})



/************************************ 

        获取帮助信息

*************************************/

//进行中帮助
route.get("/api/DoingHelp", (req, res) => {
    let sqlStr = sql.help.getDoingHelp;

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})

//待接取帮助
route.get("/api/WaitingHelp", (req, res) => {
    let sqlStr = sql.help.getWaitingHelp;

    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        // 查询
        connection.query(sqlStr, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})

//已完成帮助
route.get("/api/FinishedHelp", (req, res) => {
    let sqlStr = sql.help.getFinishedHelp;

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})


/************************************ 

        按用户获取帮助信息

*************************************/

//待接取帮助,ID查询
route.post("/api/WaitingHelp_ById", (req, res) => {
    let sqlStr = sql.help.getWaitingHelp_ById;

    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        // 查询
        connection.query(sqlStr, req.body.uid, function (error, results) {
            // console.log(results)
            res.send(results);
            connection.release();
        });
    });
})

//已完成帮助,ID
route.post("/api/FinishedHelp_ById", (req, res) => {
    let sqlStr = sql.help.getFinishedHelp_ById;

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, req.body.uid, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})

//进行中帮助,ID
route.post("/api/DoingHelp_ById", (req, res) => {
    let sqlStr = sql.help.getDoingHelp_ById;

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, req.body.uid, function (error, results) {
            res.send(results)
            connection.release();
        });
    });
})

/************************************ 

        创建\接收\完成\取消帮助

*************************************/

//创建帮助
route.post("/api/createHelp", (req, res) => {
    let sqlStr = sql.help.creatHelp;
    let params = req.body;
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.uid,
            params.help_location,
            params.help_type,
            params.help_title,
            params.help_detail,
        ], function (error, results) {
            if (results === undefined)
                res.send({ success: -1 });
            else {
                let resDate = results[0]
                res.send(resDate);
            }
            connection.release();
        });

    });
})
//接收帮助
route.post("/api/Take_Help", (req, res) => {
    let sqlStr = sql.help.Take_Help;
    let params = req.body;
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.help_id,
            params.uid,
        ], function (error, results) {
            if (results.affectedRows === 1)
                res.send({ success: 1 });
            else {
                res.send({ success: -1 });
            }
            connection.release();
        });

    });
})
//取消帮助
route.post("/api/Cancel_Help", (req, res) => {
    let sqlStr = sql.help.Cancel_Help;
    let params = req.body;
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.help_id,
        ], function (error, results) {
            if (results.affectedRows === 1)
                res.send({ success: 1 });
            else {
                res.send({ success: -1 });
            }
            connection.release();
        });

    });
})
//完成帮助
route.post("/api/Finish_Help", (req, res) => {
    let sqlStr = sql.help.Finish_Help;
    let params = req.body;
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.help_id,
        ], function (error, results) {
            if (results.affectedRows === 1)
                res.send({ success: 1 });
            else {
                res.send({ success: -1 });
            }
            connection.release();
        });

    });
})

module.exports = route;
