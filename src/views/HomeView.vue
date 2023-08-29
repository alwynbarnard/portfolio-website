<template>
  <div id="home-view-container">
    <HeroSection />
    <section id="about" class="section">
      <Contact
        cell="+27 82 783 0934"
        location="Pretoria, South Africa"
        email="barnard.alwyn262@gmail.com"
        linkedin="https://www.linkedin.com/in/alwyn-barnard/"
      />
      <SkillList heading="My Skills" :skillList="ListOfSKills" />
    </section>

    <section id="projects" class="section">
      <div>
        <h1 class="projects-heading heading">Projects</h1>
        <p class="projects-subheading centered">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
      </div>
      <br />
      <div v-for="(proj, index) in projectList" :key="index">
        <ProjectSummary
          :id="proj.projectId"
          :name="proj.projectName"
          :description="proj.projectSynopsis"
          :imageSrc="proj.projectImageSrcs[0]"
        />
      </div>
    </section>
    <section id="workHistory">
      <WorkHistory />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from '@/components/Contact.vue';
import SkillList from '@/components/SkillList.vue';
import ProjectSummary from '@/components/ProjectSummary.vue';
import HeroSection from '@/components/HeroSection.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import { projects, skillsList, type ProjectContainer } from '@/assets/APIData';

export default defineComponent({
  name: 'HomeView',
  components: {
    Contact,
    SkillList,
    ProjectSummary,
    HeroSection,
    WorkHistory,
  },
  data() {
    return {
      ListOfSKills: skillsList,
      projectList: this.getProjectList(),
    };
  },
  methods: {
    getProjectList(): ProjectContainer[] {
      return projects;
    },
    getProject(index: number) {
      return this.projectList[index];
    },
  },
});
</script>
<style scoped>
.home-view-container {
  color: aliceblue;
}
#about,
#projects,
#workHistory {
  margin: 3.125rem 0.625rem;
}
#about {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.projects-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects-subheading {
  margin-bottom: 3.125rem;
}
</style>
