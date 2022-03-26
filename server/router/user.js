const express = require('express');
const route = express.Router();
const sql = require('../db/sqlMap');
const pool = require('../db/db')

//登录
route.post("/api/login", (req, res) => {
    let sqlStr = sql.user.login;
    let params = req.body;

    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        console.log("User log in: ", params)

        // 判断是否为空
        if (params.user_id === '' || params.pswd === '')
            res.send({ success: -1 });
        else {
            // 传参查询
            connection.query(sqlStr, [
                params.user_id,
                params.pswd
            ], function (error, results) {
                let resDate = results[0]
                res.send(resDate);
                connection.release();
            });
        }
    });
})
// 获取信息
route.post("/api/get_UserInfo", (req, res) => {
    let sqlStr = sql.user.get_UserInfo;

    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, parseInt(req.body.uid), function (error, results) {
            res.send(results);
            connection.release();

            if (error) throw error;
        });

    });
})
// 修改信息
route.post("/api/chge_UserInfo", (req, res) => {
    let sqlStr = sql.user.chge_UserInfo;
    let params = req.body;

    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.uid,
            params.u_name,
            params.gender,
            params.age,
            params.grade,
            params.college,
            params.dormitory,
            params.email,
            params.phone,
        ], function (results) {
            if (res)
                res.send({ success: 1 });
            else
                res.send({ success: -1 });
            connection.release();
        });

    });
})
// 注册
route.post("/api/Register", (req, res) => {
    let sqlStr = sql.user.Register;
    let params = req.body;
    // 连接
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(sqlStr, [
            params.u_name,
            parseInt(params.age),
            params.gender,
            parseInt(params.grade),
            params.college,
            params.dormitory,
            params.email,
            params.phone,
            params.psd,
        ], function (error, results) {
            if (error) {
                // console.log("err")
                if (error.errno === 1062)
                    res.send({ success: -2 });
                else
                    res.send({ success: -1 });
            }
            else {
                console.log(results)
                let resDate = results[0]
                res.send(resDate);
            }
            connection.release();
        });

    });
})

module.exports = route;
