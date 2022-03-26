<template>
  <div id="Nav">
    <nav>
      <ul class="content_area">
        <li>
          <a href="/createHelp.html" :class="{ active: createHelp }"
            >发布求助</a
          >
        </li>
        <li>
          <a href="/HelpMall.html" :class="{ active: HelpMall }">帮助大厅</a>
        </li>
        <li><a href="/myHelp.html" :class="{ active: MyHelp }">我的求助</a></li>
        <li>
          <a
            href="/Personnal.html"
            class="iconfont icon-geren"
            :class="{ active: Personnal }"
            >个人信息</a
          >
        </li>
      </ul>
      <img src="/img/logo.png" alt="校园帮帮忙" />
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    activePage: String,
  },
  computed: {
    createHelp() {
      if (this.activePage === "createHelp") return true;
      else return false;
    },
    HelpMall() {
      if (this.activePage === "HelpMall") return true;
      else return false;
    },
    MyHelp() {
      if (this.activePage === "MyHelp") return true;
      else return false;
    },
    Personnal() {
      if (this.activePage === "Personnal") return true;
      else return false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/ttf/iconfont.css";

nav {
  height: 80px;
  width: 100%;
  position: relative;
  background-color: rgb(255, 255, 255);
}

ul {
  overflow: hidden;
  margin: 0 auto;
  padding: auto 0;
}

ul li {
  float: left;
}

ul li:nth-child(4) {
  float: right;
}
ul li:nth-child(4) a {
  width: 120px;
}

ul li a {
  display: inline-block;
  width: 100px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  color: #c02c38;
  font-size: 18px;
  transition: 0.2s;
}

ul li a:hover {
  background-color: #c02c38;
  color: #fff;
}
.active {
  background-color: #c02c38;
  color: #fff;
}

img {
  height: 40px;
  display: block;
  position: absolute;
  left: 50%;
  margin: -60px 0 0 -79px;
}
</style>
