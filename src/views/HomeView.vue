<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ $store.state.Home[0]?.Home[0]?.intro }}</h1>
    <!-- Additional HTML content goes here -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import FetchData from '@/components/FetchData';

import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    FetchData, // Include the correct component
  },
  methods: {
    async fetchSection() {
      try {
        await this.$store.dispatch('fetchSections');
        console.log('Data fetched successfully:', this.sections);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  mounted() {
    this.fetchSection();
  },
  computed: {
    ...mapState(['sections']),
  },
};
</script>

<style>
/* Your styles go here */
</style>
