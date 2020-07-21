<template>
  <div class="list">
    <div class="list__vertical-line"></div>
    <ul class="list__items">
      <li class="list-item" v-for="item in items" :key="item.key">
        <div class="list-item__bullet"></div>
        <slot v-bind:item="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ModuleListItemData } from '../typings';

@Component
export default class ModuleList extends Vue {
  @Prop({ default: [] })
  private items!: ModuleListItemData[];
}
</script>

<style scoped lang="scss">
$vertical-line-width: 0.25rem;
$bullet-diameter: 0.8125rem;

.list {
  @apply flex flex-row items-stretch;

  &__vertical-line {
    width: $vertical-line-width;

    @apply bg-blue-400;
    @apply rounded-md;
  }

  &__items {
    @apply flex-1;
  }

  .list-item {
    right: $bullet-diameter / 2 + $vertical-line-width / 2;

    @apply flex flex-row items-baseline;
    @apply relative;
    @apply mt-5;

    &:first-child {
      @apply mt-0;
    }

    &__bullet {
      width: $bullet-diameter;
      height: $bullet-diameter;

      @apply mr-4;
      @apply bg-blue-400;
      @apply rounded-full;
    }

    &__text {
      @apply flex-1;
    }
  }
}
</style>
