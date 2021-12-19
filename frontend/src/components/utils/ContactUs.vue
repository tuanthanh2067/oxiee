<template>
  <router-link :to="link">
    <span>{{ text }}</span>
    <span id="arrow">></span>
  </router-link>
</template>

<script>
export default {
  name: "ContactUs",
  props: {
    link: String,
    text: String,
  },
};
</script>

<style scoped>
a {
  color: var(--darkBlueColor);
  text-decoration: none;
}

span {
  margin-left: 0.25em;
  font-weight: bold;
}

#arrow {
  font-weight: normal;
  font-size: 0.75em;
  color: var(--darkBlueColor);
}
</style>
