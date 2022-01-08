<template>
    <b-row>
        <b-col md="12">
            <b-card>
                <b-card-body v-if="planet">
                    <h1>{{ planet.name }}</h1>
                    <hr>
                    <p><b>Gravity: </b> {{ planet.gravity }}</p>
                    <p><b>Population: </b> {{ planet.population }}</p>
                    <p><b>Climate: </b> {{ planet.climate }}</p>
                    <p><b>Terrain: </b> {{ planet.terrain }}</p>
                    <p><b>Diameter: </b> {{ planet.diameter }}</p>
                    <p><b>Surface water: </b> {{ planet.surface_water }}</p>
                    <PlanetMovies :movies="planet.films"></PlanetMovies>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
import PlanetMovies from './PlanetMovies.vue';

export default {
    name: 'PlanetView',
    data() {
        return {
            planet_id: this.$route.params.id,
            planet: null
        }
    },
    async created() {
        var response = await fetch('https://swapi.dev/api/planets/' + this.planet_id);
        var data = await response.json();

        this.planet = data;
    },
    components: {
        PlanetMovies
    }
}
</script>
