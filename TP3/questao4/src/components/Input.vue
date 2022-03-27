<template>
  <label>
    {{ label }}
    <input type="text" :name="name" :value="value" @input="onInput" @change="onChange" />
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    name() {
      return this.label.toLowerCase();
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onChange(event) { 
      this.$emit('change', event.target.value);
    },
  },
}
</script>