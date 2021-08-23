<template>
<Navbar/>
<div class="content">
  <router-view/>
</div>
<div id="container"></div>
</template>



<script>
//allow delete, update: if request.auth.uid == resource.data.userId;
import Navbar from './components/Navbar.vue'
import {World} from '@/World/world.js'
export default {
  components:{Navbar},

  methods:{
           world(){
           //get reference to the container
             const container = document.querySelector('#container');
                //create an instance of the world app
            const  world = new World(container);
                //render the scene
             world.start()
            }
  },
  mounted(){
    this.world()
  }
}
</script>



<style>
.content{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>

