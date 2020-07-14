<template>
  <div class="cv-module rounded-lg">
    <h2 class="module__title text-5xl">{{ cvModule.mainTitle }}</h2>
    <h3 class="module__title--secondary text-3xl">
      {{ cvModule.secondaryTitle }}
    </h3>
    <div
      class="cv__content"
      v-for="paragraph in cvModule.paragraphs"
      :key="paragraph.id"
    >
      <p>{{ paragraph.text }}</p>
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CvModuleData } from '@/typings/interfaces/CvModuleData.type';

@Component
export default class CvModule extends Vue {
  @Prop({
    default: {
      mainTitle: '',
      secondaryTitle: '',
      paragraphs: [],
    },
  })
  private cvModule!: CvModuleData;
}
</script>

<style scoped lang="scss">
.cv-module {
  padding: 30px;
  // border-radius: 10px;
  box-shadow: 0 0 7px 1px #e8e8e8;
}
</style>
