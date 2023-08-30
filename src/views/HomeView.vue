<template>
  <div id="home-view-container">
    <HeroSection />

    <section id="about" class="section">
      <Contact
        :cell="contactDetails.Phone"
        :location="contactDetails.Location"
        :email="contactDetails.Email"
        :linkedin="contactDetails.Linkedin"
        :github="contactDetails.Github"
      />
      <SkillList heading="My Skills" :skillList="ListOfSKills" />
    </section>

    <section id="projects" class="section">
      <h1 class="projects-heading heading">Projects</h1>
      <p class="projects-subheading centered">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </p>
      <br />
      <div v-for="(proj, index) in projectList" :key="index">
        <ProjectSummary
          :id="proj.projectId"
          :name="proj.projectName"
          :description="proj.projectSynopsis"
          :imageSrc="proj.projectImageSrcs[0] ?? ''"
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
import {
  ContactDetails,
  Projects,
  SkillsList,
  type ProjectContainer,
} from '@/assets/APIData';

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
      ListOfSKills: SkillsList,
      projectList: this.getProjectList(),
      contactDetails: ContactDetails,
    };
  },
  methods: {
    getProjectList(): ProjectContainer[] {
      return Projects;
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
