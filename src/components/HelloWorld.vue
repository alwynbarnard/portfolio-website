<template>
  <div>
    <h2 class="heading">Who am I?</h2>
    <p class="who-am-i-section">
      My objective is to excel as a developer and make impactful contributions
      to the technology industry. I am committed to refining my skills by
      learning from experienced developers, maintaining humility, and
      continuously expanding my development expertise.<br /><br />
      During my time at North West University, I served as an assistant in the
      Systems Analysis and Design department. This experience has honed my
      problem-solving abilities, system integration prowess, and proficiency in
      tackling intricate algorithms. These skills have and will continue to
      bolster my overall success as a developer. <br /><br />
      I thrive in dynamic environments, actively driving project implementation,
      establishing structured workflows, and collaborating seamlessly with team
      members to achieve successful project outcomes.
    </p>
    <div class="about-me">
      <Contact
        cell="+27 82 783 0934"
        location="Pretoria, South Africa"
        email="barnard.alwyn262@gmail.com"
        linkedin="https://www.linkedin.com/in/alwyn-barnard/"
      />
      <SkillList :skill-list="skills" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from './Contact.vue';
import SkillList from './SkillList.vue';

export default defineComponent({
  name: 'HelloWorld',
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
  },
});
</script>

<style scoped>
.heading {
  text-align: center;
  padding-bottom: 0.313rem;
  margin-bottom: 0rem;
}
.about-me {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
}
.who-am-i-section {
  text-align: center;
}
</style>
