<template>
  <div class="landing">
    <h1>Oxiee.</h1>
    <h3>Our products and services...</h3>
  </div>

  <div class="products">
    <Product />
  </div>
</template>

<script>
import Product from "@/components/Product/Product.vue";

export default {
  name: "Products",
  components: {
    Product,
  },
};
</script>

<style scoped>
.landing {
  width: 100%;
  height: 250px;

  background: var(--darkBlueColor);
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing h1 {
  font-size: 4em;
}

.products {
  margin: 1em 0em;
  padding: 0em 1em;
}
</style>
