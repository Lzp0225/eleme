<template>
   <div>
        <div class="currentArea">
            <mt-header>
                <router-link to="/" slot="left">
                    <mt-button icon="area" style="font-weight:700;"><icon name="map-marker-alt" style="vertical-align:middle;"></icon>   江西省新建县。。。</mt-button>
                </router-link>
            </mt-header>
        </div>
        <div class="searchBox" >
            <div class="searchBox_div">
                <icon name="search" style="vertical-align:middle;"></icon>  <span style="vertical-align:middle;">搜索</span>
            </div>
        </div>
       <section>
           <img src="https://fuss10.elemecdn.com/b/0a/5b1ab540506687c7b93e148704db1jpeg.jpeg?imageMogr/format/webp/" />
       </section>
       <div class="classify">
            <mt-swipe :auto="0" :show-indicators="true">
                <mt-swipe-item v-for="(item,index) in newClassify" :key="index">
                    <ul>
                        <li v-for="types in item.children" >
                            <a>
                                <img :src="types.imgSrc" />
                                <br/>
                                <span style="display:inline-block;width:50px">{{types.title}}</span>
                            </a>
                        </li>
                    </ul>
                </mt-swipe-item>
            </mt-swipe>
       </div>
       <div class="actity_banner">
           <div class="banner_box">
               <h3>品质套餐</h3>
               <p>搭配齐全吃得好</p>
               <span>立即抢购 ></span>
               <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" />
           </div>
       </div>
       <div class="markList">
           <div class="listContent" v-for="(item,index1) in storeList" :key="index1">
               <div class="shop_top">
                   <div class="shop_logo">
                       <img :src="`https://fuss10.elemecdn.com/${item.imagesSrc}?imageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/`" />
                   </div>
                   <div class="shop_details">
                       <h3>{{item.storeTitle}}</h3>
                       <p>{{item.rating}} 月售{{item.num}}单<span>{{item.delivery_mode}}</span></p>
                       <p>￥{{item.minAmount}}起送 | {{item.piecewise_agent_fee}}</p>
                   </div>
               </div>
               <div class="discount" >
                   <ul>
                       <li v-for="(act,index2) in item.activities" v-show="index2<2||act.show" >
                           <span v-if="act.icon_name=='减'" style="background-color: rgb(240, 115, 115);">{{act.icon_name}}</span>
                           <span v-if="act.icon_name=='首'" style="background-color: rgb(112, 188, 70);" >{{act.icon_name}}</span>
                           <span v-if="act.icon_name=='折'" style="background-color: rgb(240, 115, 115);">{{act.icon_name}}</span>
                           <span v-if="act.icon_name=='特'" style="background-color: rgb(240, 115, 115);">{{act.icon_name}}</span>
                           {{act.description}}
                       </li>
                   </ul>
                   <div class="activity_num" @click="showMore(item)">
                       <span v-if="item.activities!=undefined||item.activities.length!=0">{{item.activities.length}}个活动</span>
                   </div>
               </div>
           </div>
           <div style="height:55px;"></div>
       </div>
   </div>
</template>

<script>
import { Indicator } from 'mint-ui'   //按需引入
import { mapMutations,mapGetters } from 'Vuex';
export default {
    data(){
        return{
            classifyArr:[
                {id:"1",imgSrc:"https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"美食"},
                {id:"2",imgSrc:"https://fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"商超便利"},
                {id:"3",imgSrc:"https://fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"果蔬生鲜"},
                {id:"4",imgSrc:"https://fuss10.elemecdn.com/1/48/bf1a859bf81553bbcfd6cf4ac42cbjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"早餐"},
                {id:"5",imgSrc:"https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"医疗健康"},
                {id:"6",imgSrc:"https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"大牌5折"},
                {id:"7",imgSrc:"https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"浪漫鲜花"},
                {id:"8",imgSrc:"https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"麻辣烫"},
                {id:"9",imgSrc:"https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"地方菜系"},
                {id:"10",imgSrc:"https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"披萨意面"},
                {id:"11",imgSrc:"https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",title:"地方小吃"}
                
            ],
            newClassifyArr:[],
            childrenArr:[],
            categoryList:[],
            storeList:[],
            opacity:0,
            imagesIndex:0,
            showMoreIndex:0,
            showMoreFlag:{
                num:"",
                flag:false
            }
            // ,
            // latitu:'',
            // longitu:''
        }
       
    },
    computed:{
        ...mapGetters['head'],
        newClassify(){
            for(let i = 0;i<this.classifyArr.length;i+=10){
              this.newClassifyArr.push({
                  children:this.classifyArr.slice(i,i+10)  
                })
            }
             return this.newClassifyArr
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.$store.commit("showHead",{headTitle:"",flag:false})
        
            window.onscroll = () => {
                vm.opacity = window.pageYOffset / 250
                vm.$store.commit('showSearch', {position:"fixed",top: `${vm.opacity}`})
            }
        })
    },
    beforeRouteLeave(to, from, next){
        const title = `${to.path}`
        if(title === "/"){
          let title = "首页"
        }else if(title === '/find'){
          let title = "发现"
        }else if(title === '/order'){
          let title = "订单"
        }else if(title === "/mine"){
          let title = "我的"
        }
        this.$store.commit('showHead', {headTitle:title,flag:false})
    //	this.$store.commit('setShowLogo', true)
        window.onscroll = null
        next()
    },
    created(){
        this.categoryArr()
        this.storeFun()
        //  
    },
    methods:{
        showMore(item){
            for(let k = 0;k<item.activities.length;k++){
                item.activities[k].show = !item.activities[k].show
            }
        },
        categoryArr(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'snake'
            });
            this.$http.get("http://localhost:8080/static/type.json").then(({data})=>{
                this.categoryList = data;
                console.log(data)
                Indicator.close()
            })
        },
        storeFun(){
            Indicator.open({
                text: '加载中...',
                spinnerType: 'snake'
            });
            this.$http.get("http://localhost:8080/static/home.json").then(({data})=>{
                for(let i = 0;i<data.items.length;i++){
                   if(data.items[i].restaurant.image_path.indexOf('png')!=-1){
                      this.imageIndex = data.items[i].restaurant.image_path.indexOf('png');
                   }else if(data.items[i].restaurant.image_path.indexOf('jpeg')!=-1){
                      this.imageIndex = data.items[i].restaurant.image_path.indexOf('jpeg');
                   }
                    for(let j = 0;j<data.items[i].restaurant.activities.length;j++){
                        data.items[i].restaurant.activities[j].show = false;
                    }
                    this.storeList.push({
                        id : data.items[i].restaurant.id,
                        storeTitle : data.items[i].restaurant.name,
                        rating : data.items[i].restaurant.rating,
                        num :  data.items[i].restaurant.recent_order_num,
                        minAmount : data.items[i].restaurant.float_minimum_order_amount,
                        piecewise_agent_fee : data.items[i].restaurant.piecewise_agent_fee.tips,
                        imagesSrc : data.items[i].restaurant.image_path.substr(0,1)+'/'+data.items[i].restaurant.image_path.substr(1,2)+'/'+data.items[i].restaurant.image_path.substr(3)+'.'+data.items[i].restaurant.image_path.substr(this.imageIndex),
                        activities : data.items[i].restaurant.activities,
                        delivery_mode : data.items[i].restaurant.delivery_mode!=undefined?data.items[i].restaurant.delivery_mode.text:''
                    }) 
                }
                
                console.log(data)
                Indicator.close()
            })
        }
    }
}
</script>

<style>
    .shop_top{
        overflow: hidden;
    }
    .discount{
        padding-left:90px;
        position: relative;
        overflow: hidden;
    }
    .discount>ul{
       overflow: hidden;
       width: 200px;
       float: left;
    }
    .activity_num{
        height: 100%;
        position: absolute;
        right: 0;
    }
    .activity_num>span{
        font-size: 12px;
        color: #666;
    }
    .discount>ul>li{
        font-size: 12px;
        color: #666666;
        height: 20px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .discount li>span{
        color: #fff;
        display: inline-block;
        width: 15px;
        height: 15px;
        text-align: center;
        line-height: 15px;
        border-radius: 2px;
    }
    .listContent{
        overflow: hidden;
        padding: 10px
    }
    .shop_details{
        padding-left: 10px;
    }
    .shop_logo,.shop_details{
        float: left;
    }
    .shop_details>h3{
        margin: 0;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shop_details>p{
        font-size: 12px;
        color: #666666;
    }
    .actity_banner{padding: 0 10px;}
    .banner_box{height: 90px;    background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);position: relative;padding: 10px 15px;}
    .banner_box>h3{margin: 0 0 3px 0;}
    .banner_box>p{font-size: .346667rem;color: #777;margin: 0 0 2.4vw 0;}
    .banner_box>img{width: 37.6vw;position: absolute;    right: 10px;top: 10px;}
    .banner_box>span{font-size: .32rem;color: #af8260;font-weight: 700;}
    .mint-header{height: 49px!important;font-size: 18px;}
    .mint-swipe-indicator{
        width: 5px;
        height: 5px;
    }
    .foodentry .mint-swipe-indicator.is-active {
        background-color: #000;
        opacity: .6;
    }
    .mint-swipe-indicator.is-active {
        background: #000;
        opacity: .6;
    }

    section img{
        width: 100%;
        max-width: 100%;
    }
    .mint-swipe{
        height: 165px;
    }
    .mint-swipe li{
        float: left;
        width:20%;
    }
     .mint-swipe li a{
         font-size: 12px;
         text-align: center;
         display: block
     }
     .mint-swipe li a img{
            width: 50px;
            height: 50px;
     }


    .searchBox{
        padding: 3px 15px;
        background-color: #26a2ff;
    }
    .searchBox_div{
        background-color: #ffffff;
        height: 40px;
        line-height: 40px;
        text-align:center;
        color: #999999;
        font-size: 14px;
    }
</style>
