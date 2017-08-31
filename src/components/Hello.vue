<template>
  <div class="hello">
    <v-Header></v-Header>
    <Tab></Tab>
  </div>
</template>

<script>
import Header from 'com/Header/Header'
import Tab from 'com/Tab/Tab'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    'v-Header':Header,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
