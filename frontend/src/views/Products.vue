<template>
  <div class="landing">
    <h1>Oxiee.</h1>
    <h3>Our products and services...</h3>
  </div>

  <div
    v-for="productItem in productsList"
    :key="productItem.id"
    class="products"
  >
    <Product
      :isNew="productItem.isNew"
      :name="productItem.name"
      :description="productItem.description"
      :align="productItem.align"
      :illustration="productItem.illustration"
    />
  </div>
</template>

<script>
import Product from "@/components/Product/Product.vue";
import { getProducts } from "@/products";

export default {
  name: "Products",

  data() {
    return {
      productsList: [],
    };
  },

  components: {
    Product,
  },

  created() {
    this.productsList = getProducts().products;
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
