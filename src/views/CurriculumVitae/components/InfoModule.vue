<template>
  <section class="module">
    <header>
      <h2 class="module__title" v-if="title">{{ title }}</h2>
      <h2 class="module__title module__title--sub" v-if="subtitle">
        {{ subtitle }}
      </h2>
    </header>
    <article class="module__info">
      <slot />
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CvModule extends Vue {
  @Prop({ default: '' })
  private title!: string;

  @Prop({ default: '' })
  private subtitle!: string;
}
</script>

<style scoped lang="scss">
.module {
  @apply p-8;
  @apply rounded-lg shadow-lg border border-gray-150;

  &__title {
    @apply font-semibold text-3xl text-title-highlight;

    &--sub {
      @apply text-2xl text-title-highlight;
    }
  }

  &__info {
    @apply mt-6;
  }
}
</style>
