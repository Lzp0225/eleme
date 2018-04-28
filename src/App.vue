<template>
  <div id="app">
   <Head />
  <div class="main">
    <keep-alive>
      <router-view></router-view>
   </keep-alive>
  </div>
   
    
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Head from './components/Head'
import Tabbar from './components/Tabbar'
export default {
 components:{
   Head,Tabbar
 }
}
</script>

<style>

</style>
