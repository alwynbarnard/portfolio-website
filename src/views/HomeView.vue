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
      <SkillList :skill-list="skills" />
    </section>
    <section id="projects" class="section">
      <div>
        <ProjectSummary
          name="Betway Front End Redesign"
          description="The Betway Banking Front End redesign project focuses on optimizing customer banking interactions. It involves modernizing the interface, streamlining transactions, and prioritizing security. This comprehensive initiative aims to enhance user experience, responsiveness, and data analytics capabilities."
          imageSrc="../src/assets/Images/Betway.png"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from '@/components/Contact.vue';
import SkillList from '@/components/SkillList.vue';
import ProjectSummary from '@/components/ProjectSummary.vue';
import HeroSection from '@/components/HeroSection.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      skills: [
        'HTML',
        'CSS',
        'Vuetify',
        'JavaScript',
        'Typescript',
        'VueJS',
        'C# & ASP.NET',
        'MVC',
        'VSTO',
        'StencilJS',
        'Tailwind',
        'SQL',
        'SQL Server',
        'Systems Analysis & Design',
        'Xamarin',
        'Entity Framework',
        'REST APIs',
        'Git',
        'Github',
        'Responsive Design',
        'Terminal',
      ],
    };
  },
  components: {
    Contact,
    SkillList,
    ProjectSummary,
    HeroSection
  },
});
</script>
<style scoped>
* {
  color: aliceblue;
}
section {
  margin: 3.125rem 0.125rem;
}
#about {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.project-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
