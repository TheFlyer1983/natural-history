<script setup lang="ts">
import { computed } from 'vue'
import StarIcon from '@/assets/StarIcon.vue'
import { Highlight } from '@/types'
import { Routes } from '@/router/routes';
import { format } from 'date-fns';

// Typescript way of defining props in <script setup>: https://vuejs.org/api/sfc-script-setup.html#typescript-only-features
const props = defineProps<{
  highlight: Highlight,
  page: string,
}>();

const newsDate = computed(() => { 
  if (props.highlight.news?.date) {
    return format(new Date(props.highlight.news.date), 'dd-MMMM-yyyy')
  }
})

const icon = computed(() => {
  if (props.page === Routes.Space) {
    return StarIcon;
  } else if (props.page === Routes.Oceans) {
    return;
  };
})

const extraData = computed(() => {
  if (props.highlight.quiz) return props.highlight.quiz;
})

//Checking to see if highlight is from an external partner source
const isExternal = computed(() => {
  return !props.highlight.date ? true : false
})

</script>

<template>
    <div class="museum-highlight" :class="{ 'external': isExternal }"> <!-- The binding for the class here is to check the computed property and then apply a dynamic class regarding if this is from the main API or the Partner API-->
        <!-- Display the available information for the highlight -->
        <div class="museum-highlight__image">
          <!-- Dynamic component to show highlight badge dependant on page -->
          <!-- You could probably make this a slot, but I thought you would still need a separate component for each badge, so I used the Dynamic component -->
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
        <div v-if="extraData" class="pt-4">
          {{ extraData }} <!-- It wasn't asked to display this, I'm just displaying it. It also wasn't asked to display the news attribute. -->
        </div>
        <div class="pt-4" v-if="highlight.news">
          <p>Extra News</p>
          <p>{{ highlight.news.title }}</p>
          <p>{{ newsDate }}</p>
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
