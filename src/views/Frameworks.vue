<script setup>

import {ref} from 'vue'
//No hace falta que sea reactive porque no cambia y no se tiene que renderizar la vista
const frameworks = ref([
{ id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
{ id: 2, name: 'React', desc: 'Biblioteca per crear interfícies d’usuari interactives.' },
{ id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])
</script>

<template>
    <!--Esta pagina no es reactiva() por lo que se clico en enlace y luego en otro no cambia el resultados-->
    <!--/frameworks-->
    <h1>Frameworks</h1>
    <ul>
        <li v-for="framework in frameworks" :key="framework.id" >
            <!--Pongo el acento abierto para concatenar la variable y poder hacer ${} luego pongo : antes de TO  para hacer un binding para conectar variables de JS-->
            <RouterLink :to="`/frameworks/${framework.id}`">{{ framework.name }}</RouterLink>
        </li>
    </ul>
    <router-view />
</template>