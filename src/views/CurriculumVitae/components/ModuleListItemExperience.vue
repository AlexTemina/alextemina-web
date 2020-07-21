<template>
  <div>
    <p class="text">
      <span v-if="item.role" class="text__part text__part--strong">
        {{ item.role }}
      </span>
      <span class="text__part text__part--at">@</span>
      <span v-if="item.location" class="text__part">{{ item.location }}</span>
    </p>
    <p v-if="item.dates" class="text__part text__part--italic">
      {{ getFormattedDates() }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { formatDates } from '@/utils/date.utils';
import { ExperienceItem } from '../models';

@Component
export default class ModuleListItemExperience extends Vue {
  @Prop()
  private item!: ExperienceItem;

  private getFormattedDates(): string {
    return formatDates(this.item.dates);
  }
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
