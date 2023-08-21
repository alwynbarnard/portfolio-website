<template>
  <div>
    <h1>{{ message }}</h1>
    <Contact
      cell="+27 82 783 0934"
      location='Pretoria, South Africa'
      email="barnard.alwyn262@gmail.com"
      linkedin="https://www.linkedin.com/in/alwyn-barnard/"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Contact from './Contact.vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello from Vue!'
    };
  },
  components: {
    Contact
  }
});
</script>