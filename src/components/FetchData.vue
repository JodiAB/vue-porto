<template>
    <div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {

    methods: {
    async fetchSection() {
      try {
        await this.$store.dispatch('fetchSections');
        console.log('Data fetched successfully:', this.sections);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  mounted() {
    this.fetchSection();
  },
  computed: {
    ...mapState(['sections']),
  },
}
</script>
<style>
    
</style>