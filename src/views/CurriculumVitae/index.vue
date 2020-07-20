<template>
  <main class="cv">
    <CvModule class="test-module" :subtitle="cvModuleSubtitle">
      <ModuleList :items="moduleListData">
        <template v-slot="slotProps">
          <ModuleListItem v-bind:info="slotProps.itemData.info"></ModuleListItem>
        </template>
      </ModuleList>
    </CvModule>
  </main>
</template>

<script lang="ts">
import CvModule from './components/CvModule.vue';
import ModuleList from './components/ModuleList.vue';
import ModuleListItem from './components/ModuleListItem.vue';
import { ModuleListItemData } from './typings';

export default {
  components: {
    CvModule,
    ModuleList,
    ModuleListItem,
  },
  data(): { cvModuleSubtitle: string; moduleListData: ModuleListItemData[] } {
    return {
      cvModuleSubtitle: 'Experiencia',
      moduleListData: [
        {
          key: 'sopra',
          info: {
            text: 'Sopra Steria Valencia',
            subtext: '2019-2020',
            strongText: 'Frontend developer',
          },
        },
        {
          key: 'freelance',
          info: {
            text: 'Freelance',
            subtext: '2018-2019',
            strongText: 'Freelance',
          },
        },
        {
          key: 'etra',
          info: {
            text: 'Etra Valenci',
            subtext: '2017-2018',
            strongText: 'Researcher',
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.test-module {
  @apply m-10;
}
</style>
