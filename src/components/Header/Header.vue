<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <div class="header">
    <div class="header__icon">
      <font-awesome-icon icon="fa-solid fa-earth-americas"/>
    </div>
    <div>
      Natural History Museum
    </div>
    <div class="header__menu">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  background-color: lightgrey;
  height: 5rem;
  font-size: 2rem;
  padding: 10px 20px;

  &__icon {
    margin-right: 20px;
    font-size: 2.5rem;
  }

  &__menu {
    margin-left: auto;
  }
}
</style>