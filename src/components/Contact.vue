<template>
  <div class="contact-card">
    <v-card>
      <v-card-title>Contact Information</v-card-title>
      <v-card-text>
        <div class="contact-item" v-if="cell">
          <v-icon color="primary"><phone-icon class="icon"/></v-icon>
          <span>{{ props.cell }}</span>
        </div>
        <div class="contact-item" v-if="location">
          <v-icon color="primary"><map-marker-icon class="icon"/></v-icon>
          <span>{{ props.location }}</span>
        </div>
        <div class="contact-item" v-if="email">
          <v-icon color="primary"><email-icon class="icon"/></v-icon>
          <span>{{ props.email }}</span>
        </div>
        <div class="contact-item" v-if="linkedin">
          <v-icon color="primary"><link-icon class="icon"><a :href="props.linkedin">LinkedIn</a></link-icon></v-icon>
          <span>{{ props.linkedin }}</span>
        </div>
        <div class="contact-item" v-if="github">
          <v-icon color="primary"><link-icon class="icon"><a :href="props.github">Github</a></link-icon></v-icon>
          <span>{{ props.github }}</span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import PhoneIcon from '../../node_modules/vue-material-design-icons/Phone.vue'
import MapMarkerIcon from '../../node_modules/vue-material-design-icons/MapMarker.vue'
import EmailIcon from '../../node_modules/vue-material-design-icons/Email.vue'
import LinkIcon from '../../node_modules/vue-material-design-icons/Link.vue'
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
.contact-card {
  width: 300px;
  margin: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.contact-item v-icon {
  margin-right: 10px;
}
.icon {
  color: #222;
  margin-left: 12px;
  size: 36;
}
</style>
