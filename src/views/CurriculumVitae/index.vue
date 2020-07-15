<template>
  <main class="cv">
    <CvModule class="test-module" :data="cvModule">Mi nombre es Alex.</CvModule>
  </main>
</template>

<script lang="ts">
import CvModule from './components/CvModule.vue';
import { CvModuleData } from './typings';

export default {
  components: {
    CvModule,
  },
  data(): { cvModule: CvModuleData } {
    return { cvModule: { title: 'Hola!', subtitle: 'Mi nombre es alex' } };
  },
};
</script>

<style scoped lang="scss">
.test-module {
  margin: 100px;
}
</style>
