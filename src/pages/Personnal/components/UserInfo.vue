<template>
  <div class="content_area">
    <div class="container">
      <div class="header">
        <i class="iconfont icon-geren"></i>
        <input type="text" v-model="u_name" class="name" />
        <p>UID: {{ uid }}</p>
        <p>帮助量: {{ help_num }}</p>
      </div>
      <div class="other_info">
        <i class="iconfont icon-tongxingbie"></i>
        <input type="text" v-model="gender" class="gender" />
        <i class="iconfont icon-nianling"></i>
        <input type="text" v-model="age" class="age" />
        <i class="iconfont icon-xueyuan"></i>
        <input type="text" v-model="grade" class="grade" />
        <i class="iconfont icon-erjixueyuankaohefudaoyuan"></i>
        <input type="text" v-model="college" class="college" />
        <i class="iconfont icon-zhaoxueyuan"></i>
        <input type="text" v-model="dormitory" class="dormitory" />
        <i class="iconfont icon-mail"></i>
        <input type="text" v-model="email" class="email" />
        <i class="iconfont icon-dianhua"></i>
        <input type="text" v-model="phone" class="phone" />
      </div>
      <button @click="submit">保存修改</button>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "UserInfo",
  data() {
    return {
      uid: window.sessionStorage.getItem("UserID"),
      u_name: "姓名",
      gender: "性别",
      age: "年龄",
      grade: "年级",
      college: "学院",
      dormitory: "宿舍",
      email: "邮箱",
      phone: "手机号",
      help_num: "帮助量",
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("/api/chge_UserInfo", qs.stringify(this._data))
        .then((res) => {
          if (res.data.success === -1) alert("请重新输入信息，再试一次");
          else {
            alert("个人信息修改成功！");
            window.open(`../../Personnal.html`, `_self`);
          }
        });
    },
  },
  created() {
    this.$axios
      .post(
        "/api/get_UserInfo",
        qs.stringify({ uid: parseInt(window.sessionStorage.getItem("UserID")) })
      )
      .then((res) => {
        let info = res.data[0];

        this.u_name = info.name;
        this.gender = info.gender;
        this.age = info.age;
        this.grade = info.grade;
        this.college = info.college;
        this.dormitory = info.dormitory;
        this.email = info.email;
        this.phone = info.phone;
        this.help_num = info.help_num;

      });
  },
};
</script>

<style >
.container {
  background-color: #fff;
  margin-top: 100px;
  padding: 100px 200px;
  display: table;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(107, 107, 107, 0.1);
}

.container input {
  height: 60px;
  display: table-cell;
  outline: none;
  border: none;
}
.header {
  margin-bottom: 60px;
}
.header p {
  line-height: 30px;
  font-size: 20px;
}

.name {
  margin: 0 auto;
  width: 200px;
  font-size: 48px;
  color: #ee3f4d;
  font-weight: bold;
  margin-bottom: 20px;
  padding-left: 30px;
}
.container i {
  font-size: 50px;
  font-weight: bold;
  color: #ee3f4d;
}
.name::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #ee3f4d;
}

.other_info input {
  width: 290px;
  margin: 0 60px 50px 0;
  font-size: 25px;
  border-bottom: 1px solid #c1c1c1;
  padding-left: 20px;
  color: #ee3f4d;
}
.other_info i {
  font-size: 30px;
  font-weight: normal;
  color: #ee3f4d;
}
.other_info ::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #000;
}
button {
  display: block;
  margin: 50px auto;
  width: 220px;
  height: 60px;
  background-color: #ee3f4d;
  border-radius: 35px;
  border: none;
  color: aliceblue;
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 500;
  box-shadow: 0 0 10px rgb(192, 44, 56, 0.36);
  cursor: pointer;
}
</style>