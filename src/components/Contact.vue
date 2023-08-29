<template>
  <div class="contact-card">
    <div class="heading">Contact Information</div>
    <div class="contact-item" v-if="cell">
      <v-icon color="primary"><phone-icon class="icon" /></v-icon>
      <a :href="'tel:' + cell">
        <span class="contact-item-value">{{ cell }}</span></a
      >
    </div>
    <div class="contact-item" v-if="location">
      <v-icon color="primary"><map-marker-icon class="icon" /></v-icon>
      <span class="contact-item-value">{{ location }}</span>
    </div>
    <div class="contact-item" v-if="email">
      <v-icon color="primary"><email-icon class="icon" /></v-icon>
      <a :href="'mailto:' + props.email"
        ><span class="contact-item-value">{{ email }}</span></a
      >
    </div>
    <div class="contact-item" v-if="linkedin">
      <v-icon color="primary"><link-icon class="icon"></link-icon></v-icon>
      <a :href="linkedin" target="_blank"
        ><span class="contact-item-value">{{ linkedin }}</span></a
      >
    </div>
    <div class="contact-item" v-if="github">
      <v-icon color="primary"><link-icon class="icon"></link-icon></v-icon>
      <a :href="github" target="_blank"
        ><span class="contact-item-value">{{ github }}</span></a
      >
    </div>
    <section id="country-flags">
      <div class="flag-heading">Countries I can work in</div>
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
</template>

<script setup lang="ts">
import PhoneIcon from '../../node_modules/vue-material-design-icons/Phone.vue';
import MapMarkerIcon from '../../node_modules/vue-material-design-icons/MapMarker.vue';
import EmailIcon from '../../node_modules/vue-material-design-icons/Email.vue';
import LinkIcon from '../../node_modules/vue-material-design-icons/Link.vue';
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
    '../src/assets/Icons/flag-' + name.toLowerCase().replace(/\s+/g, '-') + '.png'
  );
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0.125rem;
}
.flag-heading {
  font-weight: 700;
  font-size: 2.8rem;
}
</style>
