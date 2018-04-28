<template>
   <div>发现页面</div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$store.commit("showHead",{headTitle:"发现",flag:true})
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
        }else if(title === "/mine"){
          let title = "我的"
          this.$store.commit('showHead', {headTitle:title,flag:true})
        }
        
    //	this.$store.commit('setShowLogo', true)
        window.onscroll = null
        next()
    },
    created(){
        const path = this.$route.path;
        this.$store.commit("setPath",path)
        //this.$store.commit("showHead",{headTitle:"发现",flag:true})
    }
}
</script>

<style>

</style>
