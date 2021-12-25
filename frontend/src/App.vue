<template>
  <div class="container">
    <Navbar v-if="show" />
    <router-view></router-view>
    <Footer v-if="show" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },

  computed: {
    show() {
      return this.$route.name !== "Login" && this.$route.name !== "Signup";
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --darkBlueColor: #5680e9;
  --darkOrangeColor: #e27d60;
  --darkPurpleColor: #3e1f93;

  --lightPinkColor: #fa949d;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
