<template>
  <div class="home">
    <h1>Welcome to My Vue App</h1>
  </div>
  <hello-world />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld
  },
});
</script>
<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
