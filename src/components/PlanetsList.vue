<template>
    <b-row v-if="planets">
        <b-col v-for="planet in planets" :key="planet.id" md="12" class="mb-4">
            <b-card>
                <b-card-body>
                    <h3>{{ planet.name }}</h3>
                    <hr>
                    <p><b>Gravity: </b> {{ planet.gravity }}</p>
                    <p><b>Population: </b> {{ planet.population }}</p>
                    <p><b>Climate: </b> {{ planet.climate }}</p>
                    <p><b>Terrain: </b> {{ planet.terrain }}</p>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'PlanetsList',
    data() {
        return {
            planets: null
        }
    },
    async created() {
        var response = await fetch('https://swapi.dev/api/planets/?page=1');
        var data = await response.json();

        this.planets = data.results;
    }
}
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>