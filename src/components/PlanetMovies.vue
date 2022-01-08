<template>
    <ul class="planet__movies" v-if="movies">
        <li v-for="(movie, key) in movies" :key="key">
            {{ movie }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PlanetMovies',
    props: ['movies']
}
</script>
