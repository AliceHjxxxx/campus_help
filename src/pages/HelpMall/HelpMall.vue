<template>
  <div id="HelpMall">
    <Nav activePage="HelpMall" />
    <Banner
      page="HelpMall"
      title="帮助大厅"
      discribtion="在这里，发现需要帮助的人，以及志同道合的朋友"
    />
    <Tag tag_bar="waiting" page="HelpMall" />

    <Footer />
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Tag from "../../components/Tag";

export default {
  name: "HelpMall",
  components: {
    Nav,
    Banner,
    Tag,
    Footer,
  },
};
</script>

<style>
</style>
