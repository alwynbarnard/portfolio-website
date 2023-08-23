<template>
  <div>
    <div class="heading">My Skills</div>
    <div v-for="(skill, index) in props.skillList" :key="index" class="skills">
      <div class="skill">{{ skill }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  skillList: string[];
}>();
</script>

<style scoped>
.skills {
  display: inline-grid;
  & .skill {
    background-color: palegreen;
    border-color: #7ac97a;
    padding: 1rem 1rem;
    border-radius: 0.313rem;
    font-weight: 600;
    color: #1d1c1c;
    margin: 0.5rem 0.1rem;
  }
}
</style>
