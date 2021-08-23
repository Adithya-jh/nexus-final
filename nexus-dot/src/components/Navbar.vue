<template>
  <div class="navbar">
    <nav>
      <!-- <img src="@/assets/stilloute.jpg"/> -->
      <h1><router-link :to="{ name: 'Home' }">
        <div class="brand">
        <div class="nexus">NEXUS</div><div class="dot">  dot</div>
        
        </div>
        </router-link></h1>
      <div class="links">
        <div v-if="user" >
          <router-link :to="{ name: 'Home' }" class="link">NEXUS</router-link>
          <router-link :to="{ name: 'UserPlaylists' }" class="link">MY NEXUS</router-link>
          <router-link :to="{ name: 'CreatePlaylist' }" class="link">CREATE A NEXUS</router-link>
          <span>Hi there, {{ user.displayName }}</span>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
  <div id="container"></div>
</template>

<script>
// challenge
//   - only show the logout button if we are logged in
//   - only show the signup and login links if we are not logged in
//   - use the getUser composable to help

import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'
import { useRouter } from 'vue-router'
import {World} from '@/World/world.js'
export default {
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleClick = async () => {
      await logout()
      console.log('logged out')
      router.push({ name: 'Login' })
    }

    return { handleClick, user }
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

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 16px;
  }
  .link{
    padding-right: 30px;
    font-weight: bold;
    font-size: 25px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
  #container
{
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    width: 100%;
    height: 100vh;
    z-index:-1;

}
.brand{
  display: flex;
  
}
.nexus{
  font-family: 'Staatliches', cursive;
  font-size: 40px;
}
.dot{
  font-family: 'Amatic SC', cursive;
}
</style>