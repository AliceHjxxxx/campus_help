<template>
  <div class="register">
    <div class="register_zone">
      <img class="logo" src="/img/logo_sdw.png" />
      <h2>用户注册</h2>
      <i class="iconfont icon-geren"></i>
      <input type="text" placeholder="姓名（必填）" v-model="u_name" />
      <i class="iconfont icon-tongxingbie"></i>
      <input type="text" placeholder="性别（必填：男、女）" v-model="gender" />
      <i class="iconfont icon-nianling"></i>
      <input type="text" placeholder="年龄" v-model="age" />
      <i class="iconfont icon-xueyuan"></i>
      <input type="text" placeholder="年级（必填：如 2019）" v-model="grade" />
      <i class="iconfont icon-erjixueyuankaohefudaoyuan"></i>
      <input type="text" placeholder="学院" v-model="college" />
      <i class="iconfont icon-zhaoxueyuan"></i>
      <input type="text" placeholder="宿舍" v-model="dormitory" />
      <i class="iconfont icon-dianhua"></i>
      <input type="text" placeholder="电话（必填）" v-model="phone" />
      <i class="iconfont icon-mail"></i>
      <input type="text" placeholder="邮箱（必填）" v-model="email" />
      <i class="iconfont icon-suo"></i>
      <input type="password" placeholder="密码" v-model="psd" />
      <button @click="Register()">注册</button>
      <div><a href="/index.html">返回登录</a></div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: "Register",
  data() {
    return {
      u_name: "",
      gender: "",
      age: "",
      grade: "",
      college: "",
      dormitory: "",
      email: "",
      phone: "",
      psd: "",
    };
  },
  methods: {
    Register() {
      this.$axios
        .post("/api/Register", qs.stringify(this._data))
        .then((res) => {
          if (res.data.success === -1) alert("请将信息删除重新填写，再试一次");
          else if (res.data.success === -2) alert("邮箱或电话重复，请将所有信息删除重新填写");
          else {
            alert("注册成功！请牢记你的ID："+res.data.user_id);
            window.open(`../../index.html`, `_self`);
          }
        });
    },
  },
};
</script>

<style>
@import "../../assets/css/reset.css";
@import "../../assets/ttf/iconfont.css";
.register {
  height: 100vh;
  background: url(/img/login_bg.png) center;
  background-size: cover;
}
.register_zone {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -300px 0 0 -550px;
  padding: 0 100px;
  width: 900px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20 rgb(0, 0, 0, 0.16);
  text-align: center;
}
img.logo {
  width: 250px;
  display: table-cell;
  margin: 80px auto;
  margin-bottom: 30px;
}
.register_zone h2 {
  font-size: 22px;
}
.register_zone input {
  width: 210px;
  height: 40px;
  outline: none;
  border: none;
  border-bottom: 1px solid #e9e4df;
  font-size: 18px;
  margin: 30px 50px 0 -40px;
  padding-left: 50px;
  background-color: rgba(255, 255, 255, 0);
}
.register_zone i {
  font-size: 30px;
  color: #ee3f4d;
}

.register_zone button {
  width: 220px;
  height: 50px;
  margin-top: 50px;
  border-radius: 100px;
  border: 0;
  font-size: 22px;
  color: white;
  background-image: linear-gradient(to right, #ee3f4d, #c02c38);
  cursor: pointer;
  letter-spacing: 5px;
  margin-bottom: 10px;
}

.register_zone a {
  color: #b2b0ae;
  font-weight: 100;
  font-size: 14px;
  letter-spacing: 1px;
}

.register_zone a:visited {
  color: #b2b0ae;
}
</style>