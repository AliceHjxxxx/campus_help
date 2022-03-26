<template>
  <div class="AHelp">
    <div class="content_area">
      <div class="help_info">
        <ul v-for="help in helps" :key="help.help_id">
          <div class="A_Help">
            <!-- 头部信息 -->
            <div class="help_head">
              <h2>{{ help.title }}</h2>
              <div class="help_type">{{ help.type }}</div>
              <p>{{ help.helpee }}</p>
              <span class="iconfont icon-geren"></span>
              <div class="contect_zone">
                <p class="contact">邮箱: {{ help.email }}  </p>
                <p class="contact">电话: {{ help.phone }}  </p>
              </div>
            </div>
            <!-- 详细信息 -->
            <div class="help_detail">
              <!-- 细节描述 -->
              <div class="detail_info">
                <span class="iconfont icon-duihuaxinxi"></span>
                <h3 class="info_head">详细信息</h3>
                <p class="info_content">{{ help.detail }}</p>
              </div>

              <!-- 时间 -->
              <span class="iconfont icon-shijian"></span>
              <h3 class="detail_time">时间</h3>
              <p class="detail_time">
                发起：{{ help.time.substring(0, 16).replace("T", "  ") }}
              </p>
              <p class="detail_time" v-if="help.begin">
                开始：{{ help.begin.substring(0, 16).replace("T", " ") }}
              </p>
              <p class="detail_time" v-if="help.end">
                完成：{{ help.end.substring(0, 16).replace("T", " ") }}
              </p>
              <!-- 地点 -->
              <span class="iconfont icon-didian"></span>
              <h2 class="detail_loca">{{ help.location }}</h2>
              <!-- 帮助人 -->
              <div class="helper" v-if="help.helper">
                <span class="iconfont icon-geren"></span>
                <h2 class="detail_loca">帮助人：{{ help.helper }}</h2>
              </div>

              <!-- helpBtn -->
              <div class="btnGroup">
                <div v-if="help.helper_id">
                  <div
                    v-if="
                      parseInt(help.helpee_id) === parseInt(cur_uid()) &&
                      parseInt(help.helper_id) !== parseInt(cur_uid())
                    "
                  >
                    <div v-if="help.end"></div>
                    <div v-else>
                      <button
                        class="btn_finish"
                        @click="Finish_Help(help.help_id)"
                      >
                        完成
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div v-if="parseInt(help.helpee_id) === parseInt(cur_uid())">
                    <button
                      class="btn_cancel"
                      @click="Cancel_Help(help.help_id)"
                    >
                      取消
                    </button>
                  </div>
                  <div v-else>
                    <button class="btn_help" @click="Take_Help(help.help_id)">
                      帮他
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "AHelp",

  props: {
    helps: {},
  },
  methods: {
    cur_uid() {
      return window.sessionStorage.getItem("UserID");
    },
    Take_Help(help_id) {
      this.$axios
        .post(
          "/api/Take_Help",
          qs.stringify({
            help_id: help_id,
            uid: window.sessionStorage.getItem("UserID"),
          })
        )
        .then((res) => {
          if (res.data.success === 1) {
            alert("帮助成功!");
            window.open(`../../HelpMall.html`, `_self`);
          } else if (res.data.success === -1) alert("帮助失败");
        });
    },
    Cancel_Help(help_id) {
      this.$axios
        .post(
          "/api/Cancel_Help",
          qs.stringify({
            help_id: help_id,
          })
        )
        .then((res) => {
          if (res.data.success === 1) {
            alert("取消成功");
            window.open(`../../myHelp.html`, `_self`);
          } else if (res.data.success === -1) alert("取消失败");
        });
    },
    Finish_Help(help_id) {
      this.$axios
        .post(
          "/api/Finish_Help",
          qs.stringify({
            help_id: help_id,
          })
        )
        .then((res) => {
          if (res.data.success === 1) {
            alert("帮助完成啦!");
            window.open(`../../myHelp.html`, `_self`);
          } else if (res.data.success === -1) alert("帮助还没完...");
        });
    },
  },
};
</script>

<style scoped>
.help_info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 100px 0;
  --color-base: #ee3f4d;
}

.A_Help {
  background-color: #f9f9f9;
  width: 260px;
  margin: 0 20px 50px 20px;
  border-radius: 10px;
  box-shadow: 0 0 25px rgb(38, 37, 37, 0.12);
}

.help_head {
  background-color: #fff;
  padding: 20px 32px;
  overflow: hidden;
  background-color: var(--color-base);
  border-radius: 10px 10px 0 0;
}

.help_head h2 {
  font-weight: normal;
  font-size: 26px;
  margin-bottom: 15px;
  color: #fff;
}

.help_head div.help_type {
  float: left;
  font-size: 15px;
  padding: 6px 15px;
  border-radius: 100px;
  color: var(--color-base);
  background-color: #fff;
}

.help_head span {
  float: right;
  line-height: 32px;
  color: #fff;
  font-size: 20px;
  margin-right: 3px;
}

.help_head p {
  float: right;
  font-size: 16px;
  font-weight: 300;
  line-height: 32px;
  color: #fff;
}
.contect_zone {
  margin-top: 60px;
}
p.contact {
  font-size: 14px;
  line-height: 25px;
}

.help_detail {
  padding: 30px 30px;
}

.help_detail span {
  float: left;
  color: var(--color-base);
  font-size: 20px;
  margin-right: 10px;
}

.help_detail h2 {
  font-size: 16px;
  font-weight: normal;
}
.help_detail h3 {
  font-weight: bold;
  font-size: 16px;
}

.detail_info {
  margin-bottom: 20px;
}

.detail_info h3 {
  font-weight: bold;
  margin-bottom: 5px;
}

.info_content {
  line-height: 28px;
}

.detail_time {
  margin-bottom: 20px;
}
.detail_loca {
  margin-bottom: 20px;
}
.btnGroup {
  height: 20px;
}
.btnGroup button {
  margin-right: 20px;
  font-size: 18px;
  padding: 3px 20px;
  border-radius: 100px;
  cursor: pointer;
}
.btn_help {
  float: right;
  border: #ee3f4d 1px solid;
  background-color: #ee3f4d;
  color: #ffffff;
}
.btn_cancel {
  float: right;
  border: #c0bfbf 1px solid;
  background-color: #fff;
  color: #c0bfbf;
}
.btn_cancel:hover {
  border: #c0bfbf 1px solid;
  background-color: #b1adad;
  color: #ffffff;
  transition: 0.2s;
}
.btn_finish {
  float: right;
  border: #f37521 1px solid;
  background-color: #f37521;
  color: #ffffff;
}
</style>