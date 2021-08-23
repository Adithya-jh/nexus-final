<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch the data</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
  <div id="container"></div>
</template>

<script>
import ListView from '../components/ListView.vue'
import getCollection from '../composables/getCollection'
import {World} from '@/World/world.js'

export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { error, documents } = getCollection('playlists')

    return { error, documents }
  },
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
