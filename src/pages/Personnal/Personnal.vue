<template>
  <div id="Personnal">
    <Nav activePage="Personnal" />
    <Banner page="Personnal" title="个人信息" discribtion="基础信息与帮助量"/>
    <UserInfo />
    <Footer />

  </div>
</template>

<script>
import Nav from "../../components/Nav.vue";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import UserInfo from "./components/UserInfo";

export default {
  name: "Personnal",
  data(){
    return {
      user_id: 1
    }
  },
  components: {
    Nav,
    Banner,
    Footer,
    UserInfo,
  },
};
</script>

<style>
  body {
    background-color: #F9F9F9;
  }
</style>
