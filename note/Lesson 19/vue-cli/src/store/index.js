import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        counts:0
    },
    mutations:{
        addEvent(state){
            state.counts++;
        },
        descEvent(state){
            state.counts--;
        }
    }
});

export default store