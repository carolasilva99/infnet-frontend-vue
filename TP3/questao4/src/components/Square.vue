<script>
  export default {
    name: 'Square',
    props: {
      color: {
        type: String,
        required: true,
        default: "#aaffff"
      },
    },
  }
</script>

<template>
  <div class="square" :style="{ backgroundColor: color }">
  </div>
</template>

<style scoped>
  .square {
    height: 100px;
    width: 100px;
  }
</style>
