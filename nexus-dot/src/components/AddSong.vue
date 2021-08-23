<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true" class="addot">Add dot</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a New Song</h4>
      <input type="text" placeholder="title" required v-model="title">
      <textarea type="text" placeholder="info" required v-model="artist"  style="resize: none; white-space: pre;" class="big-font"></textarea>
      
      <input type="url" placeholder="link to share (if any)" v-model="url" class="big-link" >
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useDocument from '../composables/useDocument'

export default {
  props: ['playlist'],
  setup(props) {
    const title = ref('')
    const artist = ref('')
    const url = ref(null)
    const showForm = ref(false)
    const { updateDoc } = useDocument('playlists', props.playlist.id)

    const handleSubmit = async () => {
      const newSong = {
        title: title.value,
        artist: artist.value,
        url: url.value,
        id: Math.floor(Math.random() * 1000000)
      }
      const res = await updateDoc({
        songs: [...props.playlist.songs, newSong]
      })
      title.value = ''
      artist.value = ''
      url.value = null
    }

    return { title, artist, showForm, handleSubmit,url }
  }
}
</script>

<style scoped>
  .add-song {
    text-align: center;
    margin-top: 40px;
    margin-bottom:15px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
  textarea{
    height: 150px;
  }
  .big-link{
    height: 40px;
    
  }
  .big-font{
    font-size: 20px;
  }

</style>