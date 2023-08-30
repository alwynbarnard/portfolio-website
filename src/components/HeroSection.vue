<template>
  <section id="hero" class="hero">
    <div class="hero-inner">
      <h1 class="title">Hey, I'm Alwyn Barnard</h1>
      <h3 class="padded">
        I'm a passionate and innovative Intermediate Software Developer with a
        knack for crafting exceptional web experiences and software solutions.
        With a strong foundation in VueJS, Vuetify, NuxtJS, and an array of
        other technologies, I bring a fresh perspective to every project I
        tackle. My expertise spans web development, database management, UI/UX
        design, and more.
      </h3>
      <button
        class="primary-button spaced-around"
        onclick="window.location.href='about"
      >
        Contact Me
      </button>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
    url('../assets/Images/pexels-hero-3.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.padded {
  padding: 1rem;
}
.spaced-around {
  margin: 0.625rem;
}
</style>
