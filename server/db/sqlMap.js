// sql语句
var sqlMap = {
    user: {
        // 登录
        login: "select Login(?, ?) as success;",
        // 修改信息
        chge_UserInfo: "call chge_UserInfo(?, ?, ?, ?, ?, ?, ?, ?, ?)",
        // 获取信息
        get_UserInfo: "SELECT * FROM user where 1= 1 and user_id = ?",
        // 注册
        Register: "select Create_User(?,?,?,?,?,?,?,?,?) as user_id",
    },
    help: {

        // 搜索帮助
        searchHelp_waiting: "SELECT * FROM Help_Waiting where title like ?;",
        searchHelp_doing: "SELECT * FROM Help_doing where title like ?;",
        searchHelp_finished: "SELECT * FROM Help_Finished where title like ?;",

        //待接取帮助
        getWaitingHelp: "SELECT * FROM Help_Waiting;",
        getWaitingHelp_ById: "SELECT * FROM Help_Waiting where 1= 1 and helpee_id = ? ",

        //完成帮助
        getFinishedHelp: "SELECT * FROM Help_Finished;",
        getFinishedHelp_ById: "SELECT * FROM Help_Finished where 1= 1 and helpee_id = ? ",

        //进行中帮助
        getDoingHelp: "SELECT * FROM Help_doing;",
        getDoingHelp_ById: "SELECT * FROM Help_doing where 1= 1 and helpee_id = ? ",

        // 创建
        creatHelp: "select Create_Help(?,?,?,?,?) as help_id",
        // 接收
        Take_Help: "call Take_Help(?, ?)",
        // 取消
        Cancel_Help: "call Cancel_Help(?)",
        // 完成
        Finish_Help: "call Finish_Help(?)",
    }
};

module.exports = sqlMap;