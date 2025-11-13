<script setup>

import { useRoute } from 'vue-router'
const frameworks = [
{ id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
{ id: 2, name: 'React', desc: 'Biblioteca per crear interfícies dusuari interactives.' },
{ id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
]

//Obtengo el parametro de la URL
const route=useRoute();

//id es el nombre del parametro que hemos puesto en la definición de la ruta
const frameId=parseInt(route.params.id)

const framework=frameworks.find( f => f.id==frameId)
</script>

<template>
    <!--/frameworks/:id-->
    <h2>Details</h2>
    <p>{{ framework.name }}</p>
    <p></p>
</template>