<template>
  <div class="currentArea">
      <mt-header :title="title" style="font-size:18px;">
       <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      </mt-header>
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style>
  .mint-header{height: 49px;}
</style>
