<template>
  <footer>
    <div class="links">
      <div>
        <Logo />
        <p>Company management</p>
      </div>

      <div class="info">
        <h3>Information</h3>
        <router-link to="/contact">Contact us</router-link>
        <router-link to="/about">About us</router-link>
      </div>

      <div class="auth">
        <h3>Authentication</h3>
        <router-link to="/signup">Sign up</router-link>
        <router-link to="/login">Log in</router-link>
      </div>
    </div>
    <div class="rights">
      <p>© 2021 Oxiee. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "Footer",
  components: {
    Logo,
  },
};
</script>

<style scoped>
footer {
  padding: 3em;
  height: 300px;
  background: rgb(246, 246, 246);
}

.links {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: black;
}

.auth,
.info {
  display: flex;
  flex-direction: column;
}

.rights {
  margin-top: 5em;
  border-top: 1px solid rgb(221, 221, 221);
}

.rights p {
  margin-top: 1.25em;
}
</style>
