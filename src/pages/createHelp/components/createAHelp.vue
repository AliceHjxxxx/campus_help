<template>
  <div class="tmp">
    <div class="content_area">
      <div class="type">
        <div class="head">
          <div>1</div>
          <h2>求助类型</h2>
        </div>
        <input type="text" v-model="help_type" placeholder="输入求助类型" />
        <p>
          请在“课程辅导、约会聚餐、旧物出售、信息咨询、紧急需求、其它需求”中选择
        </p>
      </div>
      <div class="title_detail">
        <div class="head">
          <div>2</div>
          <h2>标题及详细信息</h2>
        </div>
        <input
          type="text"
          v-model="help_title"
          placeholder="输入标题（小于20字）"
        />
        <textarea
          type="text"
          v-model="help_detail"
          placeholder="输入帮助描述（小于500字）"
        ></textarea>
      </div>
      <div class="location">
        <div class="head">
          <div>3</div>
          <h2>预约地点</h2>
        </div>
        <input
          type="text"
          v-model="help_location"
          placeholder="输入预约地点（小于50字）"
        />
      </div>
      <button @click="submit">提交</button>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "createAHelp",
  data() {
    return {
      help_type: "",
      help_title: "",
      help_detail: "",
      help_location: "",
      uid: window.sessionStorage.getItem("UserID"),
    };
  },
  methods: {
    submit() {
      this.$axios
        .post("/api/createHelp", qs.stringify(this._data))
        .then((res) => {
          if (res.data.success === -1) alert("请重新输入帮助信息，再试一次");
          else {
            alert("创建成功！帮助号："+res.data.help_id);
            window.open(`../../createHelp.html`, `_self`);
          }
        });
    },
  },
};
</script>

<style>
.tmp {
  margin-left: 200px;
}
.head {
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 60px;
}

.head div {
  font-size: 20px;
  float: left;
  width: 35px;
  height: 35px;
  background-color: #ee3f4d;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: aliceblue;
}

.head h2 {
  margin-left: 20px;
  font-size: 24px;
  color: #ee3f4d;
}

input {
  border: 0;
  outline: 0;
  height: 48px;
  width: 500px;
  outline: #707070 solid 1px;
  border-radius: 8px;
  margin: 15px 0 0 55px;
  font-size: 18px;
  padding-left: 20px;
  caret-color: #ee3f4d;
}

input:focus {
  outline: #ee3f4d solid 1px;
}

.type p {
  font-size: 15px;
  margin-left: 55px;
  margin-top: 10px;
  letter-spacing: 1px;
  color: #707070;
}

textarea {
  display: block;
  border: 0;
  outline: 0;
  height: 100px;
  width: 500px;
  outline: #707070 solid 1px;
  border-radius: 8px;
  margin: 15px 0 0 55px;
  font-family: Courier;
  font-size: 18px;
  padding-left: 20px;
  padding-top: 15px;
  caret-color: #ee3f4d;
}

textarea:focus {
  outline: #ee3f4d solid 1px;
}
button {
  display: block;
  margin: 90px auto;
  width: 210px;
  height: 60px;
  background-color: #ee3f4d;
  border-radius: 35px;
  border: none;
  color: aliceblue;
  font-size: 28px;
  letter-spacing: 5px;
  font-weight: 500;
  box-shadow: 0 0 10px rgb(192, 44, 56, 0.36);
  cursor: pointer;
}
</style>