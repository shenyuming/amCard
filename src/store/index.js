import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        settings: {
            tagsView: true
        }
    },

    mutations: {
        setTagViews(state, data){
            state.settings.tagsView = data
        }
    },

    actions: {

    }
})
