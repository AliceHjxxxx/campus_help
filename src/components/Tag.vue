<template>
  <div class="tag_container">
    <div class="tag">
      <div class="tag_bg">
        <div class="content_area">
          <ul>
            <!-- waiting -->
            <li
              @click="
                choose_tag(`waiting`);
                getWaitingHelp();
              "
              class="in_tag"
              :class="{ active: waiting }"
            >
              待接取
            </li>
            <li
              @click="
                choose_tag(`doing`);
                getDoingHelp();
              "
              class="in_tag"
              :class="{ active: doing }"
            >
              进行中
            </li>

            <!-- finished -->
            <li
              @click="
                choose_tag(`completed`);
                getFinishedHelp();
              "
              class="in_tag"
              :class="{ active: completed }"
            >
              已完成
            </li>
          </ul>
        </div>
      </div>
      <div
        style="overflow: hidden; padding-bottom: 1px"
        v-if="page === 'HelpMall'"
      >
        <div class="search">
          <input type="text" placeholder="搜索标题" v-model="kwd" />
          <button class="iconfont icon-sousuo" @click="search_by_kwd()">
            搜索
          </button>
        </div>
      </div>
    </div>
    <AHelp :helps="helps" />
  </div>
</template>

<script>
import AHelp from "./AHelp";
import qs from "qs";

export default {
  name: "Tag",
  data() {
    return {
      tag_bar_data: this.tag_bar,
      helps: [
        {
          help_id: "帮助号",
          title: "标题",
          type: "类型",
          detail: "详细",
          time: "时间",
          location: "地点",
          helpee: "求助人",
          helpee_id: "求助人ID",
          helper: "帮助人",
          helper_id: "帮助人ID",
          begin: "开始时间",
          end: "结束时间",
          email: "邮箱",
          phone: "电话",
        },
      ],
      kwd: "",
    };
  },
  props: {
    page: String,
    tag_bar: String,
  },
  computed: {
    waiting() {
      if (this.tag_bar_data === "waiting") return true;
      else return false;
    },

    doing() {
      if (this.tag_bar_data === "doing") return true;
      else return false;
    },

    completed() {
      if (this.tag_bar_data === "completed") return true;
      else return false;
    },
  },
  methods: {
    choose_tag(tag) {
      if (tag === "waiting") {
        this.tag_bar_data = "waiting";
      } else if (tag === "doing") {
        this.tag_bar_data = "doing";
      } else if (tag === "completed") {
        this.tag_bar_data = "completed";
      } else return "";
    },

    getWaitingHelp() {
      if (this.page === "HelpMall") {
        this.$axios.get("/api/WaitingHelp").then((res) => {
          this.helps = res.data;
        });
      } else if (this.page === "MyHelp") {
        this.$axios
          .post(
            "/api/WaitingHelp_ById",
            qs.stringify({
              uid: window.sessionStorage.getItem("UserID"),
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      }
    },

    getFinishedHelp() {
      if (this.page === "HelpMall") {
        this.$axios.get("/api/FinishedHelp").then((res) => {
          this.helps = res.data;
        });
      } else if (this.page === "MyHelp") {
        this.$axios
          .post(
            "/api/FinishedHelp_ById",
            qs.stringify({
              uid: window.sessionStorage.getItem("UserID"),
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      }
    },

    getDoingHelp() {
      if (this.page === "HelpMall") {
        this.$axios.get("/api/DoingHelp").then((res) => {
          this.helps = res.data;
        });
      } else if (this.page === "MyHelp") {
        this.$axios
          .post(
            "/api/DoingHelp_ById",
            qs.stringify({
              uid: window.sessionStorage.getItem("UserID"),
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      }
    },

    search_by_kwd() {
      if (this.tag_bar_data === "waiting") {
        this.$axios
          .post(
            "/api/searchHelp_waiting",
            qs.stringify({
              keyWord: this.kwd,
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      } else if (this.tag_bar_data === "doing") {
        this.$axios
          .post(
            "/api/searchHelp_doing",
            qs.stringify({
              keyWord: this.kwd,
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      } else if (this.tag_bar_data === "completed") {
        this.$axios
          .post(
            "/api/searchHelp_finished",
            qs.stringify({
              keyWord: this.kwd,
            })
          )
          .then((res) => {
            this.helps = res.data;
          });
      } else return "";
    },
  },

  created() {
    if (this.page === "HelpMall") {
      this.$axios.get("/api/WaitingHelp").then((res) => {
        this.helps = res.data;
      });
    } else if (this.page === "MyHelp") {
      this.$axios
        .post(
          "/api/WaitingHelp_ById",
          qs.stringify({
            uid: window.sessionStorage.getItem("UserID"),
          })
        )
        .then((res) => {
          this.helps = res.data;
        });
    }
  },

  components: {
    AHelp,
  },
};
</script>

<style>
.tag ul {
  height: 60px;
  background-color: #f9f9f9;
}
.tag_bg {
  height: 60px;
  background-color: #f9f9f9;
}

.in_tag {
  float: left;
  box-sizing: border-box;
  color: #757575;
  height: 60px;
  margin: 0 25px;
  font-size: 18px;
  line-height: 60px;
}
.in_tag:hover {
  color: #000000;
  cursor: pointer;
}
.in_tag.active {
  border-bottom: 2px solid #ee3f4d;
  color: #000000;
}
/* aaaaaaaaaaaaaaaaa */
.search {
  margin: 100px auto;
  width: 600px;
}

.search input {
  border: 0;
  outline: 0;
  height: 48px;
  width: 500px;
  outline: #ee3f4d solid 1px;
  border-radius: 100px 0 0 100px;
  font-size: 20px;
  caret-color: #ee3f4d;
  padding-left: 20px;
  float: left;
  box-sizing: border-box;
}

.search button {
  border: 0;
  outline: 0;
  box-sizing: border-box;
  float: right;
  width: 100px;
  height: 48px;
  outline: #ee3f4d solid 1px;
  border-radius: 0 100px 100px 0;
  background-color: #ee3f4d;
  color: aliceblue;
  font-size: 17px;
  cursor: pointer;
}
</style>