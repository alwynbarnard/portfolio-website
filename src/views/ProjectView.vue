<template>
  <h1 class="heading project-heading">{{ project.projectName }}</h1>
  <hr />
  <div>
    <section id="project-overview">
      <h3 class="heading projects-overview">Project Overview</h3>
      <div class="project-overview-container">
        <div v-for="(overviews, index) in project.projectDetail" :key="index">
          {{ overviews }} <br /><br />
        </div>
        <button class="primary-button">
          <a :href="project.projectLink">See live</a>
        </button>
      </div>
    </section>

    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in project.projectImageSrcs"
        :key="i"
        :src="item"
        cycle
        interval="5000"
      ></v-carousel-item>
    </v-carousel>

    <section id="tools">
      <SkillList heading="Tools used:" :skill-list="project.projectTools" />
    </section>
  </div>
</template>
<script setup lang="ts">
import SkillList from '@/components/SkillList.vue';
import { Projects, type ProjectContainer } from '@/assets/APIData';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const projectId = ref(route.params.projectId);

const filteredProjectList = Projects.filter((x) => {
  return x.projectId == projectId.value;
})[0];

const project: ProjectContainer = {
  projectId: filteredProjectList.projectId,
  projectName: filteredProjectList.projectName,
  projectDetail: filteredProjectList.projectDetail,
  projectImageSrcs: filteredProjectList.projectImageSrcs,
  projectLink: filteredProjectList.projectLink,
  projectSynopsis: filteredProjectList.projectSynopsis,
  projectTools: filteredProjectList.projectTools,
};
</script>
<style scoped>
.heading {
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-heading {
  margin: 50px 10px;
  color: palegreen;
}
.ProjectView {
  color: aliceblue;
  padding: 0.625rem 1.25rem;
}
.project-synopsis {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 1.25rem;
}
#Project-intro,
#project-showcases,
#project-overview,
#tools {
  margin-bottom: 3.125rem;
}
.project-overview-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
#project-showcases {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
button a {
  color: black;
}
.v-carousel {
  color: black;
}
</style>
