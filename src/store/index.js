import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import URLS from '@/utils/api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        memberInfo: '',
        IsAdmin: '',
        IsMiddleman: '',
        language:'zh'// 语言默认中文
    },

    mutations: {
        MEMBERINFO(state, data) {
            state.memberInfo = data
        },
        ISADMIN(state, data) {
            state.IsAdmin = data
        },
        ISMIDDLEMAN(state, data) {
            state.IsMiddleman = data
        },
        SETLANGUAGE(state,data){
            state.language = data
            localStorage.setItem('__Lang__', data)
        },
    },

    actions: {
        QUERYMAINN({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(URLS.basicInfo)
                    .then(function (response) {
                        if (response.data.Entity && response.data.Entity != null) {
                            const memberInfo = response.data.Entity;
                            const isAdmin = response.data.Entity.IsAdmin;
                            const isMiddleMen = response.data.Entity.IsMiddleman;
                            commit('MEMBERINFO',memberInfo),
                            commit('ISADMIN',memberInfo.IsAdmin)
                            commit('ISMIDDLEMAN',memberInfo.IsMiddleman)
                            localStorage.setItem('__ISADMIN__', isAdmin)
                            localStorage.setItem('__ISMIDDLEMAN__', isMiddleMen)
                            resolve(response)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        reject(error)
                    })

            })
        }
    }
})
