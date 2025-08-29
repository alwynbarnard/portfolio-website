<template>
  <section id="hero" class="hero">
    <div class="hero-inner">
      <h1 class="title">Hey, I'm Alwyn Barnard</h1>
      <h3 class="padded">
        I'm a passionate and innovative BI Developer with a knack for crafting
        exceptional web experiences and software solutions. With a strong
        foundation in PowerBI, Python, SQL, PBI Report Builder and an array of
        other technologies, I bring a fresh perspective to every project I
        tackle. My expertise spans business intelligence development, data
        analysis, web development, database management, UI/UX design, and more.
      </h3>
      <a
        :href="
          'mailto:' +
          ContactDetails.Email +
          '?subject=Contact Request from Portfolio Site'
        "
        ><button class="primary-button spaced-around">Contact Me</button></a
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import { ContactDetails } from '@/assets/APIData';
</script>

<style scoped>
#hero {
  text-align: center;
  padding: 0 1.25rem 1.25rem 0;
  display: block;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../../Images/pexels-hero-4.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.hero-inner {
  padding: 1rem 3rem;
}
.padded {
  padding: 1rem;
}
.spaced-around {
  margin: 0.625rem;
}

/* Small screens */
@media screen and (max-width: 768px) {
  .title {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.1rem;
  }
}
/* Extra small screens */
@media screen and (max-width: 480px) {
  #hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('../../Images/pexels-hero-portrait-1.jpg');
  }
  .title {
    font-size: 3rem;
  }
  h3 {
    font-size: 1rem;
  }
}
</style>
