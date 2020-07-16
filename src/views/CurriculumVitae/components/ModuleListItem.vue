<template>
  <div>
    <p class="text">
      <span class="text__part text__part--strong" v-if="info.strongText">
        {{ info.strongText }}
      </span>
      <span class="text__part text__part--at">@</span>
      <span class="text__part" v-if="info.text">{{ info.text }}</span>
    </p>
    <p class="text__part text__part--italic" v-if="info.subtext">
      {{ info.subtext }}
    </p>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { ModuleListItemInfo } from '../typings';

  @Component
  export default class ModuleListItem extends Vue {
    @Prop()
    private info!: ModuleListItemInfo;
  }
</script>

<style scoped lang="scss">
  .text {
    &__part {
      &--strong {
        @apply font-semibold;
        @apply mr-1;
      }

      &--italic {
        @apply italic text-gray-800 text-sm;
      }

      &--at {
        @apply text-gray-600;
        @apply mr-1;
      }
    }
  }
</style>
