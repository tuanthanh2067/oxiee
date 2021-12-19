<template>
  <div class="product">
    <div class="section information">
      <div class="text">
        <h5>New</h5>
        <h1>Work Schedule</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          minima incidunt voluptatem omnis modi, labore voluptate illum quia
          totam. Nemo?
        </p>
      </div>

      <div class="link">
        <ContactUs link="/contact" text="Contact us" />
        <ContactUs link="/signup" text="Sign up" />
      </div>
    </div>
    <div class="section illustration">
      <img :src="Schedule" alt="schedule" />
    </div>
  </div>
</template>

<script>
import Schedule from "@/assets/schedule.svg";
import ContactUs from "@/components/utils/ContactUs.vue";

export default {
  name: "Product",

  data() {
    return {
      Schedule: Schedule,
    };
  },

  components: {
    ContactUs: ContactUs,
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

.section {
  flex: 50%;
  padding: 3em;
}

.information {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.information .text {
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
