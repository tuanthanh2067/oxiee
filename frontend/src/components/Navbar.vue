<template>
  <nav id="nav">
    <div class="section left-section">
      <Logo />
      <router-link to="/products">Products</router-link>
      <router-link to="/contact">Contact us</router-link>
      <router-link to="/about">About us</router-link>
    </div>
    <div class="section right-section">
      <router-link to="/login">Log in</router-link>
      <router-link to="/signup">Sign up</router-link>
    </div>
  </nav>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "Navbar",
  components: {
    Logo,
  },
};
</script>

<style scoped>
#nav {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 5em;
  padding-right: 5em;

  background: #f6f6f6;
  color: rgb(64, 64, 64);
}

.section {
  height: 30px;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: rgb(120, 120, 120);
  text-decoration: none;
  margin-left: 1em;
  margin-right: 1em;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
