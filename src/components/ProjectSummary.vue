<template>
  <div>
    <h1 class="projects-heading heading">Projects</h1>
    <p class="projects-subheading centered">
      Here you will find some of the personal and clients projects that I
      created with each project containing its own case study
    </p>
  </div>
  <br />
  <div id="project-summary-container">
    <div class="projects-showcase">
      <img :src="props.imageSrc" style="max-width: 50%" />
    </div>
    <div>
      <h3>{{ props.name }}</h3>
      <br />
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
  align-items: center;
}
.projects-button {
  margin: 3.125rem auto;
}
.projects-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects-subheading {
  margin-bottom: 50px;
}
.projects-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
