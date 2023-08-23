<template>
  <div>
    <h1 class="projects-heading">Projects</h1>
    <p>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
  </div>
  <br />
  <div id="project-summary-container">
    <div>
      <img :src="props.imageSrc" style="max-width: 100%;" />
    </div>
    <div class="project-details">
      <h3>{{ props.name }}</h3>
      <p>{{ props.description }}</p>
      <button
        class="primary-button projects-button"
        onclick="document.location='/project'"
      >
        Projects
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
  description: string;
  imageSrc: string;
}>();
</script>
<style scoped>
h3 {
  font-weight: bolder;
}
#project-summary-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.projects-button {
  margin: 3.125rem auto;
  display: block;
  align-items: center;
}
.project-details {
  display: block;
}
.projects-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
