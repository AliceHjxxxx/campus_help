<template>
  <div id="createHelp">
    <Nav activePage="createHelp" />
    <Banner page="createHelp" title="发布求助" discribtion="在这里，尽情提出自己的一切想法"/>
    <createAHelp />
    <Footer />
    
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import createAHelp from "./components/createAHelp";
import Footer from "../../components/Footer";

export default {
  name: "createHelp",
  components: {
    Nav,
    Banner,
    createAHelp,
    Footer,
  },
};
</script>

<style>
</style>
