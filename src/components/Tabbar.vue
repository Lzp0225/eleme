<template>
    <div class="tabItem">
        <mt-tabbar v-model="tabbarValue">
            <mt-tab-item id="home">
                <icon slot="icon" name="brands/google" ></icon>
               首页
            </mt-tab-item>
            <mt-tab-item id="find">
                <icon slot="icon" name="regular/compass" ></icon>
                发现{{$route.path}}
            </mt-tab-item>
            <mt-tab-item id="order">
                <icon slot="icon" name="regular/file-alt" ></icon>
                订单
            </mt-tab-item>
            <mt-tab-item id="mine">
                <icon slot="icon" name="regular/user" ></icon>
                我的
            </mt-tab-item>
        </mt-tabbar> 
    </div>
</template>

<script type="es6">
import { Tabbar, TabItem } from 'mint-ui';
import { mapGetters } from 'Vuex'
export default {
    data(){
        return{
            selectTab:''
        }
    },
    computed:{
        ...mapGetters['head','pathStr'],
       tabbarValue:{
           get:function(){
               
               return this.selectTab;
           },
           set:function(val){
               this.selectTab = val;
               this.routerLink(val)
           }
       }
    },
    
    methods:{
        routerLink(val){
            switch (val) {
                case 'home':
                   
                    this.$router.push({path : '/'})
                    
                    break;
                case 'find':
                    
                    this.$router.push({path : '/find'})
                     
                    break;
                case 'order':
                    
                    this.$router.push({path : '/order'})
                  
                    
                    break;
                case 'mine':
                    
                    this.$router.push({path : '/mine'})
                    
                    break;
             }
        }
    }
    // ,
    // mounted(){
    //   //  this.tabbarValue="home";
    //     const path = this.$route.path;
    //     switch(path){
    //         case '/':
    //         this.selectTab = 'home';
    //         break;
    //         case '/find':
    //         this.selectTab = 'find';
    //         break;
    //         case '/order':
    //         this.selectTab = 'order';
    //         break;
    //         case '/mine':
    //         this.selectTab = 'mine';
    //         break;
    //     }
    // }
}
</script>

<style>
.mint-tabbar > .mint-tab-item.is-selected{
    background: #fafafa !important;
}
.mint-tabbar{
    position: fixed!important;
}
.tabItem{
    color: #8e8e93;
}
</style>
