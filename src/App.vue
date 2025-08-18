<script setup>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<style>
:root {
  font-family: "Unbounded", sans-serif;
  
  /* --color-bg: #fefae0;
  --color-main: #283618;
  --color-secondary: #606c38;
  --color-accent-main: #bc6c25;
  --color-accent-secondary: #dda15e; */

  --color-bg: #f2f4f3;
  --color-main: #0a0908;
  --color-secondary: #22333b;
  --color-accent-main: #5e503f;
  --color-accent-secondary: #a9927d;
}

body {
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-bg);
  color: var(--color-main);
}

h1 {
  font-family: "Unbounded", sans-serif;
  text-align: center;
}

a {
  text-decoration: none;
}

a:visited {
  color: #000;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}

</style>
