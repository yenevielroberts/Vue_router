<script setup>
import Home from './views/Home.vue';

</script>

<template>

  <nav>
    <RouterLink to="/">
      Home
    </RouterLink>
    <RouterLink to="/frameworks">
      Frameworks
    </RouterLink>
  </nav>
  <!--Ventana donde se mostrarán los componentes que devuelvan las rutas. Segun el enlace que clique se mostrará aquí una información u otra-->
  <RouterView />
</template>

<style scoped>
</style>
