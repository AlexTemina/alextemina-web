<template>
  <main id="cv">
    <CvModule class="test-module" v-bind:cvModule="testModule" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CvModule from '@/components/cv/CvModule.vue';
import { CvModuleData } from '@/typings/interfaces/CvModule';

@Component({
  components: {
    CvModule,
  },
})
export default class CurriculumVitae extends Vue {
  private testModule: CvModuleData = {
    mainTitle: 'Main Title',
    secondaryTitle: 'Secondary Title',
    paragraphs: [
      {
        id: 'first',
        text:
          'Tengo mucha experiencia en el desarrollo de software en general. Actualmente me dedico al desarrollo web y móvil, y soy experto en JavaScript, Angular e Ionic, pero he trabajado en otros ámbitos como el mundo de los videojuegos y la visualización 3D.',
      },
    ],
  };
}
</script>

<style scoped lang="scss">
.test-module {
  margin: 100px;
}
</style>
