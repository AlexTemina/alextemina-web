<template>
  <main class="cv">
    <InfoModule class="test-module" :subtitle="cvModuleSubtitle">
      <ModuleList :items="experience.experienceItems">
        <template v-slot="slotProps">
          <ModuleListItemExperience v-bind:item="slotProps.item"></ModuleListItemExperience>
        </template>
      </ModuleList>
    </InfoModule>
  </main>
</template>

<script lang="ts">
import InfoModule from './components/InfoModule.vue';
import ModuleList from './components/ModuleList.vue';
import ModuleListItemExperience from './components/ModuleListItemExperience.vue';
import { Experience } from './models';

export default {
  components: {
    InfoModule,
    ModuleList,
    ModuleListItemExperience,
  },
  data(): { cvModuleSubtitle: string; experience: Experience } {
    return {
      cvModuleSubtitle: 'Experiencia',
      experience: Experience.createExperience([
        {
          location: 'Sopra Steria Valencia',
          dates: ['2019-03', '2020-07'],
          role: 'Frontend developer',
        },
        {
          location: 'Freelance',
          dates: ['2018', '2019'],
          role: 'Freelance',
        },
        {
          location: 'Etra Valencia',
          dates: ['2017', '2018'],
          role: 'Researcher',
        },
      ]),
    };
  },
};
</script>

<style scoped lang="scss">
.test-module {
  @apply m-10;
}
</style>
