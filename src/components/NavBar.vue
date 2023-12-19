<template>
    <nav>
        <div class="logo">
          <router-link to="/">
          <img src="@/assets/logo.png" alt="">
        </router-link>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/Projects">Projects</router-link></li>
            <li><router-link to="/Services">Services</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
        </ul>
        </div>
      </nav>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style>
    
</style>