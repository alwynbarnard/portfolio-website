<template>
  <div>
    <div class="heading" id="Contact">Contact Information</div>
    <div class="contact-card">
      <div class="contact-item" v-if="location">
        <v-icon class="icon">mdi-map-marker</v-icon>
        <span class="contact-item-value">
          <a target="_blank" :href="getLocationLink(location)">
            {{ location }}
            <v-icon class="icon openNewIcon">mdi-open-in-new</v-icon>
          </a>
        </span>
      </div>
      <div class="contact-item" v-if="email">
        <v-icon class="icon">mdi-email</v-icon>
        <a :href="'mailto:' + props.email">
          <span class="contact-item-value"
            >{{ email
            }}<v-icon class="icon openNewIcon">mdi-open-in-new</v-icon></span
          >
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
          <span class="contact-item-value"
            >{{ linkedin
            }}<v-icon class="icon openNewIcon">mdi-open-in-new</v-icon></span
          >
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
          <span class="contact-item-value"
            >{{ github
            }}<v-icon class="icon openNewIcon">mdi-open-in-new</v-icon></span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/vue-fontawesome';

const props = withDefaults(
  defineProps<{
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
.openNewIcon {
  font-size: 1rem;
}
#country-flags {
  padding: 2rem 0;
}
.flag-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  margin: 0.125rem 5.625rem 0.125rem 0.625rem;
}

/* Extra small screens */
@media screen and (max-width: 480px) {
  .contact-card {
    display: grid;
    grid-template-rows: auto;
    margin: 0.625rem 0rem;
  }
}

/* Small screens */
@media screen and (max-width: 768px) {
  .flag-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0.125rem 1rem 0.125rem 0.625rem;
  }
}
</style>
