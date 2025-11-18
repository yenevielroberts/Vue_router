import { createRouter, createWebHistory } from 'vue-router'
/*import  Home from '@/views/Home.vue'
import  Frameworks from '@/views/Frameworks.vue'
import FrameworkDetail2 from '@/views/FrameworkDetail2.vue'*/

//Función que crea las rutas
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //cuando me pidan / le paso un componente que se llama home y paso el componente
    //Otra forma de poner /frameworks/:id es :id
    //Dentro de frameworks tengo rounterLinks que son hijos
    {path: "/", name:"home", component:()=>import('@/views/Home.vue')},//lazy route
    {path: "/frameworks", 
      name:"frameworks", 
      component:()=>import('@/views/Frameworks.vue'), 
      children:[{path:"/frameworks/:id", name:"frameworkdetail", component:()=>import('@/views/FrameworkDetail2.vue') }]}
  ],
})

export default router
