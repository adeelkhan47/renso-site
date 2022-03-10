<template>
  <div class="heading">
    <h2>
      {{ text }}
    </h2>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.heading {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 0 10px;
  padding-top: 20px;
}
</style>
