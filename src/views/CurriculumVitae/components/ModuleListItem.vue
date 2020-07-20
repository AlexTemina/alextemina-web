<template>
  <div>
    <p class="text">
      <span v-if="info.strongText" class="text__part text__part--strong">
        {{ info.strongText }}
      </span>
      <template v-if="info.text">
        <span class="text__part text__part--at">@</span>
        <span v-if="info.text" class="text__part">{{ info.text }}</span>
      </template>
    </p>
    <p v-if="info.subtext" class="text__part text__part--italic">
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
