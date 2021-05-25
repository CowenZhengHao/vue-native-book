import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        counts:0,
        time:moment().format('YYYY-MM-DD HH:mm:ss'),
        list:[
            {
                name:"Kebe Byrant",
                age:33
            },
            {
                name:"Paul Jamas",
                age:30
            },
            {
                name:"Tim James",
                age:15
            }
        ]
    },
    mutations:{
        addEvent(state){
            state.counts++;
        },
        descEvent(state){
            state.counts--;
        },
        mutifyEvent(state,payload){
            // state.counts=state.counts*num;
            // console.log(payload)
            state.counts=state.counts*payload.num;
        }
    },
    getters:{
        powercounts(state){
            return state.counts*state.counts;
        },
        powerval(state,getters){
            return "-A-"+getters.powercounts+"-A-";
        },
        getlitter(state){
            return state.list.filter(item=>item.age<=30);
        },
        getmore(state){
            return (age)=>{
                return state.list.filter(item=>item.age>age)
            }
        }
    }
});

export default store