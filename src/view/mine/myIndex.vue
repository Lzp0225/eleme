<template>
   <div>my页面</div>
</template>

<script>
export default {
     beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$store.commit("showHead",{headTitle:"我的",flag:true})
        })
    },
    beforeRouteLeave(to, from, next){
        const title = `${to.path}`
        if(title === "/"){
          let title = "首页"
          this.$store.commit('showHead', {headTitle:title,flag:false})
        }else if(title === '/order'){
          let title = "订单"
          this.$store.commit('showHead', {headTitle:title,flag:true})
        }else if(title === "/findIndex"){
          let title = "发现"
          this.$store.commit('showHead', {headTitle:title,flag:true})
        }
        
    //	this.$store.commit('setShowLogo', true)
        window.onscroll = null
        next()
    }
    ,
    created(){
        const path = this.$route.path;
        this.$store.commit("setPath",path)
    }
}
</script>

<style>

</style>
