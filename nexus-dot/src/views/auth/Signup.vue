<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="Username">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign up</button>
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
</template>

<script>
// using @ means start at the project src root
import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const { error, signup, isPending } = useSignup()
    const router = useRouter()

    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
        router.push({ name: 'UserPlaylists' })
      }
    }

    return { email, password, displayName, handleSubmit, error, isPending }
  }
}
</script>

<style scoped>
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