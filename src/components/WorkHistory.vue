<template>
  <div>
    <h1 class="experience-heading heading">Experience</h1>
    <v-timeline align="start" line-color="var(--primary-text-color)">
      <v-timeline-item
        v-for="(work, i) in WorkHistoryData"
        :key="i"
        size="small"
        line-color="var(--primary-text-color)"
        dot-color="var(--primary-button-color)"
        :fill-dot="true"
      >
        <template v-slot:opposite>
          <div>
            <div class="role">{{ work.position }}</div>
            <br />
            <div>
              {{ work.startDate }} - {{ work.endDate }} <br />
              Location: {{ work.location.city }} {{ work.location.country }}
            </div>
            <img
              :src="generateImageSource(work.location.country)"
              :alt="'Flag of ' + work.location"
              :title="work.location.country"
              width="25"
              class="flag-image"
            />
          </div>
        </template>
        <div>
          <h2>
            {{ work.companyName }}
          </h2>
          <div>
            {{ work.responsibilities }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts">
import { WorkHistoryData } from '@/assets/APIData';

function generateImageSource(name: string): string {
  return (
    '../src/assets/Icons/flag-' +
    name.toLowerCase().replace(/\s+/g, '-') +
    '.png'
  );
}
</script>

<style>
.v-timeline-divider__inner-dot {
  box-shadow: var(--primary-button-boxshadow);
}
.role {
  color: palegreen;
  font-weight: bold;
  font-size: 1.5rem;
}
.experience-heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
