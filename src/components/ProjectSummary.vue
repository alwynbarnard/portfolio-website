<template>
  <div id="project-summary-container">
    <div class="projects-showcase">
      <img :src="props.imageSrc" />
    </div>
    <div>
      <h3 class="Project-name">{{ props.name }}</h3>
      <br />
      <p>{{ props.description }}</p>
      <button class="primary-button projects-button" @click="goToProjects(id)">
        View Project
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}>();

const router = useRouter();

const goToProjects = (projectId: string) => {
  router.push({ name: 'Projects', params: { projectId } });
};
</script>
<style scoped>
.Project-name {
  font-weight: bolder;
}
#project-summary-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
.projects-button {
  margin: 3.125rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.projects-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  & img {
    max-width: 40%;
    max-height: 40%;
  }
}
/* Medium screens*/
@media screen and (max-width: 1024px) {
  .projects-showcase {
    margin: 0;
    & img {
      max-width: 50%;
      max-height: 50%;
    }
  }
}
/* Extra small screens */
@media screen and (max-width: 480px) {
  #project-summary-container {
    display: grid;
    grid-template-columns: none;
    grid-template-rows: auto;
  }
  .Project-name {
    padding-top: 1rem;
  }
}
</style>
