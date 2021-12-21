<template>
  <div :class="align === 'right' && 'product-reverse'" class="product">
    <div class="section information">
      <div class="text">
        <h5>{{ isNew ? "New" : "" }}</h5>
        <h1>{{ name }}</h1>

        <p>
          {{ description }}
        </p>
      </div>

      <div class="link">
        <ContactUs link="/contact" text="Contact us" />
        <ContactUs link="/signup" text="Sign up" />
      </div>
    </div>
    <div class="section illustration">
      <img :src="illustration" :alt="name" />
    </div>
  </div>
</template>

<script>
import ContactUs from "@/components/utils/ContactUs.vue";

export default {
  name: "Product",

  components: {
    ContactUs: ContactUs,
  },

  props: {
    isNew: Boolean,
    name: String,
    description: String,
    align: String,
    illustration: String,
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  height: 500px;

  display: flex;

  border-radius: 16px;
  box-shadow: 1px 1px 5px rgb(185, 185, 185);
}

.product-reverse {
  flex-direction: row-reverse;
}

.section {
  flex: 50%;
  padding: 3em;
}

.information {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.information .text,
.information .link {
  max-width: 400px;
  text-align: center;
}

.information h5 {
  font-weight: normal;
  color: red;
}

.information h1 {
  margin: 0.15em 0em 0.35em 0em;
  font-size: 2.75em;
}

.information p {
  font-size: 1.25em;
}

.information .link {
  margin-top: 2em;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

.illustration img {
  width: 100%;
  height: 100%;
}
</style>
