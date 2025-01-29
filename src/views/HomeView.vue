<template>
  <div id="home-view-container">
    <HeroSection />

    <section id="about" class="section">
      <Contact
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
      <v-card class="project-card">
        <v-tabs v-model="currentTab">
          <v-tab value="bi">BI & Data Projects</v-tab>
          <v-tab value="web">Web Development Projects</v-tab>
        </v-tabs>

        <v-window v-model="currentTab">
          <v-window-item value="bi">
            <v-container>
              <v-row>
                <ProjectSummary
                  v-for="project in biProjects"
                  :key="project.projectId"
                  :id="project.projectId"
                  :name="project.projectName"
                  :description="project.projectSynopsis"
                  :imageSrc="project.projectImageSrcs[0] ?? ''"
                />
              </v-row>
            </v-container>
          </v-window-item>

          <v-window-item value="web">
            <v-container>
              <v-row>
                <ProjectSummary
                  v-for="project in webProjects"
                  :key="project.projectId"
                  :id="project.projectId"
                  :name="project.projectName"
                  :description="project.projectSynopsis"
                  :imageSrc="project.projectImageSrcs[0] ?? ''"
                />
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
    </section>

    <section id="workHistory">
      <WorkHistory />
    </section>

    <footer>
      <FooterSection />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Contact from '@/components/ContactInfo.vue';
import SkillList from '@/components/SkillList.vue';
import ProjectSummary from '@/components/ProjectSummary.vue';
import HeroSection from '@/components/HeroSection.vue';
import WorkHistory from '@/components/WorkHistory.vue';
import FooterSection from '@/components/FooterSection.vue';
import {
  ContactDetails,
  Projects,
  SkillsList,
  type ProjectContainer,
} from '@/assets/APIData';

const currentTab = ref('bi');
const projectList = Projects;
const ListOfSKills = SkillsList;
const contactDetails = ContactDetails;

const biProjects = computed(() =>
  projectList.filter((project) => !project.projectType.includes('FE'))
);

const webProjects = computed(() =>
  projectList.filter((project) => project.projectType.includes('FE'))
);
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
.project-card {
  background-color: inherit;
  color: inherit;
}
.projects-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projects-subheading {
  margin-bottom: 3.125rem;
}

/* Extra small screens */
@media screen and (max-width: 480px) {
  #about {
    display: grid;
    grid-template-rows: auto auto;
    align-items: center;
    grid-template-columns: none;
  }
  .projects-subheading {
    margin-bottom: 1rem;
  }
  #about,
  #projects,
  #workHistory {
    margin: 1rem 0.625rem;
  }
}
</style>
