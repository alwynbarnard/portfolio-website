<template>
  <div>
    <div class="heading" id="Contact">Contact Information</div>
    <div class="contact-card">
      <div class="contact-item" v-if="cell">
        <v-icon class="icon">mdi-phone</v-icon>
        <a :href="'tel:' + cell">
          <span class="contact-item-value">{{ cell }}</span>
        </a>
      </div>
      <div class="contact-item" v-if="location">
        <v-icon class="icon">mdi-map-marker</v-icon>
        <span class="contact-item-value">
          <a target="_blank" :href="getLocationLink(location)">
            {{ location }}
          </a>
        </span>
      </div>
      <div class="contact-item" v-if="email">
        <v-icon class="icon">mdi-email</v-icon>
        <a :href="'mailto:' + props.email">
          <span class="contact-item-value">{{ email }}</span>
        </a>
      </div>
      <div class="contact-item" v-if="linkedin">
        <font-awesome-icon
          class="icon"
          size="xl"
          :icon="['fab', 'linkedin']"
          style="color: palegreen"
        />
        <a :href="linkedin" target="_blank">
          <span class="contact-item-value">{{ linkedin }}</span>
        </a>
      </div>
      <div class="contact-item" v-if="github">
        <font-awesome-icon
          class="icon"
          size="xl"
          :icon="['fab', 'github']"
          style="color: #98fb98"
        />
        <a :href="github" target="_blank">
          <span class="contact-item-value">{{ github }}</span>
        </a>
      </div>
      <section id="country-flags">
        <div class="heading">Countries I can work in</div>
        <div class="flag-container">
          <img
            v-for="(country, index) in WorkableCountries"
            :key="index"
            :src="generateImageSource(country)"
            :alt="'Flag of ' + country"
            :title="country"
            width="25"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/vue-fontawesome';
import { WorkableCountries } from '@/assets/APIData';

const props = withDefaults(
  defineProps<{
    cell: string;
    location: string;
    email: string;
    linkedin?: string;
    github?: string;
  }>(),
  {
    cell: '',
    location: '',
    email: '',
  }
);

function generateImageSource(name: string): string {
  return (
    '../src/assets/Icons/flag-' +
    name.toLowerCase().replace(/\s+/g, '-') +
    '.png'
  );
}
function getLocationLink(location: string): string {
  return 'http://maps.google.com/?q=' + location.replace(/ /g, '+');
}
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  margin: 0.625rem 0rem;
}
.contact-item-value {
  padding-left: 0.625rem;
}
.contact-item v-icon {
  margin-right: 0.625rem;
}
.icon {
  color: palegreen;
  margin-left: 0.75rem;
  size: 2.25rem;
}

#country-flags {
  padding: 2rem 0;
}
.flag-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin: 0.125rem;
}

/* Extra small screens */
@media screen and (max-width: 480px) {
  .contact-card {
    display: grid;
    grid-template-rows: auto;
    margin: 0.625rem 0rem;
  }
}
</style>
