<script setup lang="ts">
import { computed } from 'vue'
import StarIcon from '@/assets/StarIcon.vue'
import { Highlight } from '@/types'
import { Routes } from '@/router/routes';

// Typescript way of defining props in <script setup>: https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
const props = defineProps<{
  highlight: Highlight,
  page: string,
}>();

const newsDate = computed(() => props.highlight.news?.date) //Didn't know where to use this as it only appeared on one hightlight, but if it is there then this computed property will return that date.

const icon = computed(() => {
  if (props.page === Routes.Space) {
    return StarIcon;
  } else if (props.page === Routes.Oceans) {
    return;
  };
})

const isExternal = computed(() => {
  return !props.highlight.date ? true : false
})

</script>

<template>
    <div class="museum-highlight" :class="{ 'external': isExternal }"> <!-- The binding for the class here is to check the computed property and then apply a dynamic class regarding if this is from the main API or the Partner API-->
        <!-- Display the available information for the highlight -->
        <div class="museum-highlight__image">
          <!-- Dynamic component to show highlight badge dependant on page -->
          <component :is="icon" class="museum-highlight__image__badge"/>
          <!-- Placeholder image for the card image-->
          <img src="https://via.placeholder.com/400x200">
        </div>
        <div class="museum-highlight__name pb-3">
          {{highlight.name}}
        </div>
        <div>
          {{highlight.description || highlight.info}} <!-- Because the description is named info from the parter, then this is showing one or the other, depending on which one is available. This could also be done in a computed property.-->
        </div>
    </div>
</template>



<style lang="scss" scoped>
.museum-highlight {
  position: relative;
  width: 25rem;
  margin-bottom: 50px;

  &__image {
    &__badge {
      position: absolute;
      left: 100%;
      top: 0;
      transform: translate(-60%, -40%)
    }
  }

  &__name {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.external {
  background-color: palegoldenrod;
}
</style>
