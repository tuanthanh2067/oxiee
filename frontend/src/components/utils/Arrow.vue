<template>
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    :style="{ fill: color }"
    :class="orientation"
  >
    <path
      d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
    />
  </svg>
</template>

<script>
export default {
  name: "ArrowIcon",
  props: {
    orientation: String,
    color: String,
  },
};
</script>

<style scoped>
.left {
  transform: rotate(-180deg);
}

.top {
  transform: rotate(-90deg);
}

.bottom {
  transform: rotate(90deg);
}
</style>
