<template>
  <div>
    <h3 class="heading">{{ props.heading }}</h3>
    <div>{{ props.description }}</div>
    <div v-if="props.navigate">
      <button onclick="window.location.href='/about'" class="primary-button">
        {{ props.navigateButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    heading: string;
    description: string;
    navigate: boolean;
    navigateButtonText?: string;
    navigateButtonSrc?: string;
  }>(),
  {
    heading: '',
    description: '',
    navigate: false,
  }
);
</script>
