<script setup>

import { watch,ref } from 'vue';
import { useRoute } from 'vue-router'

const frameworks =ref( [
{ id: 1, name: 'Vue.js', desc: 'Progressive Framework per construir interfícies web.' },
{ id: 2, name: 'React', desc: 'Biblioteca per crear interfícies dusuari interactives.' },
{ id: 3, name: 'Angular', desc: 'Framework complet per aplicacions empresarials.' }
])

const framework=ref(null)

//Obtengo el parametro de la URL
const route=useRoute();
//id es el nombre del parametro que hemos puesto en la definición de la ruta
const frameId=parseInt(route.params.id)

//Función para cargar la información de los frameworks
const cargarFramework=(id)=>{framework.value= frameworks.value.find( f => f.id==id)}
//Llamo la función para que la imprimera carga se muestre un framework
cargarFramework(route.params.id)

//Le digo lo que quiero mirar. Cuando cambie el id ejecuta lo siguiente
watch(
    ()=>route.params.id,//lo que quiero mirar si cambia
    (newID)=>{
        cargarFramework(newID)//Función que se ejecutará cuando cambie el parametro en la url
    }
)
</script>

<template>
    <!--/frameworks/:id-->
    <h2>Details</h2>
    <p>{{ framework.name }}</p>
    <p></p>
</template>