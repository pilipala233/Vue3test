<template>
  <div class="my-wrap">
    <Nav style=""/>
    <Body style="flex:1"/>  
  </div>

</template>

<script>
import Nav from './components/Nav.vue';
import Body from './components/Body.vue'
export default {
  name: 'App',
  components: {
    Nav,
    Body
  }
}
</script>

<style>
body,html{
  height: 100%;
}
.my-wrap {
  
  display: flex;
  height: 100%;
  flex-direction: column;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
 
}
#app{
  height: 100%;
  text-align: center;
}
</style>
