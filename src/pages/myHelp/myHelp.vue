<template>
  <div id="MyHelp">
    <Nav activePage="MyHelp" />
    <Banner
      page="MyHelp"
      title="我的求助"
      discribtion="在这里，及时查看已被响应的请求"
    />
    <Tag tag_bar="waiting" page="MyHelp" />

    <Footer />
  </div>
</template>

<script>
import Nav from "../../components/Nav.vue";
import Banner from "../../components/Banner";
import Tag from "../../components/Tag";
import Footer from "../../components/Footer";

export default {
  name: "MyHelp",
  components: {
    Nav,
    Tag,
    Banner,
    Footer,
  },
};
</script>

<style>
</style>
