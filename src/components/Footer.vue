<template>
  <div id="footer">
    <div class="content_area">
      <div class="others">
        <img src="/img/logo_sdw.png" alt="campus_help" />
        <div class="info">
          <div class="author">
            <h3 class="title">Designed By</h3>
            <div class="brk"></div>
            <p>李宇轩</p>
          </div>
          <div class="gitee">
            <h3 class="title">项目地址</h3>
            <div class="brk"></div>
            <a
              href="https://gitee.com/easy_to_remeber/campus-help"
              target="_blank"
              >点击访问仓库</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style >
#footer {
  height: 300px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

#footer img {
  height: 120px;
  float: left;
  margin-right: 350px;
}

.others {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  float: right;
}

.brk {
  height: 1px;
  width: 150px;
  border-bottom: 1px solid #404040;
  margin: 5px 0 10px 0;
}

.author {
  margin-bottom: 30px;
}

.title {
  font-size: 26px;
  font-weight: 200;
}

.gitee .title {
  font-size: 24px;
}

a:visited {
  color: #404040;
}

a:hover {
  color: #ee3f4d;
}
</style>