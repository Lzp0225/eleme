<template>
    <div class="header">
        <Header v-if="head.isShowHead" :title="head.title" />
    </div>
    
</template>

<script>
import Header from './Header'
import {mapGetters} from 'Vuex'
export default {
     computed: {
      ...mapGetters(['head'])
    },
    components:{
        Header
    },
    mounted(){
        const a = this.head.title
    }
}
</script>

<style>

</style>
