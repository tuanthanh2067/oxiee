<template>
  <div class="landing-window">
    <div class="text">
      <div class="introduction">
        <h1>Employees and company management simplified</h1>
        <span>
          Oxiee is a product that provides services for employers to manage
          their employees, work schedules, etc.
          <a href="/">Learn more</a>
        </span>
      </div>

      <button>Sign up</button>
    </div>

    <div class="illustration">
      <img :src="coworkersImage" alt="co-workers" id="image" />
    </div>
  </div>
</template>

<script>
import coworkersImage from "@/assets/co-workers.svg";

export default {
  data() {
    return {
      coworkersImage: coworkersImage,
    };
  },
};
</script>

<style scoped>
.landing-window {
  width: 100%;
  height: calc(100vh - 70px);
  background: var(--darkBlueColor);

  padding-left: 3em;
  padding-right: 3em;

  color: white;

  display: flex;
}

.text {
  align-self: center;
  flex: 60%;
  padding: 0em 2em;
}

.text h1 {
  font-size: 2.75em;
  line-height: 1.25em;
}

.text span {
  font-size: 1.075em;
}

a {
  color: white;
}

.illustration {
  flex: 40%;
}

button {
  border: none;
  background: white;

  margin-top: 1.5em;
  padding: 12px 24px;

  border-radius: 12px;

  color: var(--darkBlueColor);
  font-weight: bold;
  font-size: 1.075em;
}

#image {
  height: 100%;
  width: 100%;
}
</style>
