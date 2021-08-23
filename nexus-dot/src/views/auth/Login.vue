<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }} 
                  <br> <br> does'nt have a account? SignUp instead </div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
  <br>
  <div class="abt">
    <div class="abt-1">
     <div class="nexus">NEXUS</div><div class="dot">  dot</div>
    </div>
    <br>
     <div class="abt-2">A  PLACE  TO  SHARE  YOUR  IDEAS</div>   
     <div class="abt-3">🙵  ENHANCE  NETWORKING...</div>   

  </div>
  <div id="container"></div>
</template>

<script>
// using @ means start at the project src root
import useLogin from '@/composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {World} from '@/World/world.js'
export default {
  setup() {
    const { error, login, isPending } = useLogin()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    //let container = ref(null)
    //const world = ref(null)

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        router.push({ name: 'UserPlaylists' })
      }
    }



         //world()   


    return { email, password, handleSubmit, error, isPending }
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
.abt-1{
  display: flex;
}
.abt{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nexus{
  font-family: 'Staatliches', cursive;
  font-size: 40px;
}
.dot{
  font-family: 'Amatic SC', cursive;
}
.abt-3 , .abt-2{
  font-family: 'Exo', sans-serif;
  font-size: 20px;
  font-weight: bold;
}

</style>