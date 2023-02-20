<template>
  <button v-if="type == 'submit'" class="submit-btn" :type="type">
    <slot></slot>
  </button>
  <a
    v-else
    :download="downloadText"
    :href="from"
    class="btn"
  >
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  downloadText: {
    type: String,
    required: false,
  },
  from: {
    type: String,
    required: true,
    default: "#"
  },
  type: {
    type: String,
    required: false,
  }
})
</script>

<style scoped lang="scss">
.btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 12rem;
  margin: 3rem 0 1.5rem 0;
  font-size: $text-large;
  border: 1px solid $green;
  padding: 0.75rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  background-color: $light-gray;
  color: $gray;
  transition-duration: 500ms;

  &:focus {
    box-shadow: inset 0 0 0 3px rgba( 0, 131, 115, 10%);
  }

  &:hover {
    background-color: $green;
    color: $light-gray;
    transition-duration: 500ms;
    transition-property: background-color, color;
  }
}

button.submit-btn {
  all: unset;
  cursor: pointer;
  padding: 0.625rem 1rem;
  color: white;
  letter-spacing: 0.05em;
  background-color: $green;
  border-radius: 0.5rem;
  transition-duration: 500ms;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &:focus {
    box-shadow: inset 0 0 0 3px rgba( 0, 131, 115, 10%);
    transition-duration: 500ms;
  }

  &:hover {
    background-color: $greener;
  }
}

@media (max-width: $small) {
  .btn {
    width: 9rem;
    padding: 0.625rem;
  }
}
</style>
