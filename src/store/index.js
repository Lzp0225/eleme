import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        head:{
            title:'',
            isShowHead:false,
            homeSearch:''
        },
        nav:{
            showTab:""
        },
        pathStr:''
    },
    getters:{
        head:state => state.head,
        showTab:state => state.nav.showTab,
        pathStr:state => state.pathStr
    },
    mutations:{
        showHead(state,{headTitle,flag}) {
            state.head.title = headTitle
            state.head.isShowHead = flag
        },
        showSearch(state,style){
            state.head.homeSearch = style
        },
        showNav(state,str){
            state.nav.showTab = str
        },
        setPath(state,path){
            state.pathStr = path
        }
    }
})

export default store