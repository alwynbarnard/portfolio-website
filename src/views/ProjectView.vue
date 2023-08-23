<template>
  <div>
    <h1>{{ props.heading }}</h1>
    <p>{{ props.description }}</p>
    <a :href="props.projectLink"><button>Project Link</button></a>

    <div v-for="(img, index) in props.imageSrcs" :key="index">
      <img :src="img" alt="Project Images" />
    </div>

    <div>
      <h3>Project Overview</h3>
      <p>{{ props.projectOverview }}</p>
    </div>

    <h3>Tools Used</h3>
    <SkillList :skill-list="props.tools" />

    <a :href="props.projectLink"><button>Project Link</button></a>
  </div>
</template>
<script setup lang="ts">
import SkillList from '@/components/SkillList.vue';

// Components
const props = withDefaults(
  defineProps<{
    heading: string;
    description: string;
    projectOverview: string;
    projectLink: string;
    tools: string[];
    imageSrcs: string[];
  }>(),
  {
    heading: 'Betway Front End Redesign',
    description:
      "The redesign and redevelopment of the Betway Banking Front End is a strategic initiative aimed at enhancing the user experience and efficiency of the banking processes for Betway's customers. The project focuses on modernizing the existing banking interface, streamlining transactional workflows, and improving overall usability while maintaining security and compliance standards. The project involves a comprehensive overhaul of the user interface (UI) and user experience (UX) design, backed by robust backend development to ensure a seamless and secure financial interaction platform.",
    projectOverview:
      '<h2>Goals and Key Deliverables:</h2><ol><li><h3>Enhanced Experience:</h3><p>Develop an intuitive, user-centric UI to simplify navigation and enhance engagement.</p></li><li><h3>Efficiency and Security:</h3><p>Streamline transactions, reducing processing time, and implementing robust security measures.</p></li><li><h3>Responsive Design and Integration:</h3><p>Create a consistent cross-device experience and seamlessly integrate with backend systems.</p></li><li><h3>Personalization and Insights:</h3><p>Integrate personalized features based on user history and gather valuable behavioral insights.</p></li><li><h3>Thorough Testing and Documentation:</h3><p>Ensure functionality, performance, and security through rigorous testing and provide detailed documentation.</p></li><li><h3>Training and Refinement:</h3><p>Conduct training sessions for teams and iterate based on user feedback.</p></li></ol>',
  }
);
</script>
<style></style>
