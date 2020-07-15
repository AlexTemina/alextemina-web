<template>
  <section class="module">
    <h2 class="module__title" v-if="data.title">{{ data.title }}</h2>
    <h2 class="module__title--sub" v-if="data.subtitle">{{ data.subtitle }}</h2>
    <slot />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CvModuleData } from '../typings';

@Component
export default class CvModule extends Vue {
  @Prop({ default: { title: null, subtitle: null } })
  private data!: CvModuleData;
}
</script>

<style scoped lang="scss">
.module {
  @apply p-8 rounded-lg shadow-lg border border-gray-150;

  &__title {
    @apply font-semibold text-3xl text-purple-highlight;

    &--sub {
      @apply text-2xl;
    }
  }
}
</style>
