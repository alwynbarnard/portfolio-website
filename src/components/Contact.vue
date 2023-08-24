<template>
  <div class="contact-card">
    <div class="heading">Contact Information</div>
    <div class="contact-item" v-if="cell">
      <v-icon color="primary"><phone-icon class="icon" /></v-icon>
      <a :href="'tel:'+ cell"><span>{{ cell }}</span></a>
    </div>
    <div class="contact-item" v-if="location">
      <v-icon color="primary"><map-marker-icon class="icon" /></v-icon>
      <span>{{ location }}</span>
    </div>
    <div class="contact-item" v-if="email">
      <v-icon color="primary"><email-icon class="icon"/></v-icon>
      <a :href="'mailto:'+ props.email">{{ email }}</a>
    </div>
    <div class="contact-item" v-if="linkedin">
      <v-icon color="primary"><link-icon class="icon"></link-icon></v-icon>
      <a :href="linkedin" target="_blank"><span>{{ linkedin }}</span></a>
    </div>
    <div class="contact-item" v-if="github">
      <v-icon color="primary"><link-icon class="icon"></link-icon></v-icon>
      <a :href="github" target="_blank"><span>{{ github }}</span></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import PhoneIcon from '../../node_modules/vue-material-design-icons/Phone.vue';
import MapMarkerIcon from '../../node_modules/vue-material-design-icons/MapMarker.vue';
import EmailIcon from '../../node_modules/vue-material-design-icons/Email.vue';
import LinkIcon from '../../node_modules/vue-material-design-icons/Link.vue';

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
</script>

<style scoped>
.contact-item {
  display: flex;
  align-items: center;
  margin: 0.625rem 0rem;
}
.heading {
  padding-left: 1rem;
}
.contact-item v-icon {
  margin-right: 0.625rem;
}
.icon {
  color: palegreen;
  margin-left: 0.75rem;
  size: 36;
  
}
</style>
