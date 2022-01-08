<template>
  <div id="app">
    <b-container>
      <PlanetsList></PlanetsList>
    </b-container>
  </div>
</template>

<script>
import PlanetsList from './components/PlanetsList.vue';

export default {
  name: 'App',
  components: {
    PlanetsList
  }
}
</script>

