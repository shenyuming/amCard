<template>
    <div class="headTop">
        <div class="g-fl">
            <img class="logoImg g-fl" src="@/assets/image/logoTopAll.png" alt="">
            <p class="index g-fl" @click="hrefHome">{{$t('lang.user.index') }}</p>
            <div v-if="memberInfo == ''">
                <a class="link g-fl" :href="loginIn">{{ $t('lang.user.connectDiscord') }}</a>
            </div>
        </div>
        <div class="g-fr">
            <div class="person g-fl" @click="hrefUser">
                <img src="@/assets/image/pic.png" alt="">
                <span v-if="memberInfo.Name">{{memberInfo.Name}}</span>
            </div>
            <div class="language g-fl">
                <span v-if="language=='en'" @click="handleCommand('zh')">中文</span>
                <span v-else @click="handleCommand('en')">EN</span>
            </div>
            <div v-if="memberInfo.Id == null ">
                <a class="login g-fl" :href="loginIn">{{ $t('lang.user.login') }}</a>
            </div>
            <a v-else class="login g-fl" :href="loginOut">{{ $t('lang.user.logout') }}</a>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'userHeadComponent',
    data() {
        return {
            loginIn: this.URLS.logIn,
            loginOut: this.URLS.logOut
        }
    },

    watch: {

    },
    computed: {
        // ...mapState({
        //     memberInfo: state => state.memberInfo
        // })
         ...mapState(['memberInfo','language'])
    },
    methods: {
        //跳转到首页
        hrefHome() {
            this.$router.push({ path: '/home' })

        },
        hrefUser() {
            if (this.memberInfo.id) {
                this.$router.push({ path: '/user/index' })
            } else {
                location.href = this.loginIn
            }

        },
        // 切换语言
        handleCommand(command) {
            switch (command) {
                case "zh":
                    {
                        this.$i18n.locale = "zh";
                        this.$store.commit('SETLANGUAGE', 'zh')
                        break;
                    }
                case "en":
                    {
                        this.$i18n.locale = "en";
                        this.$store.commit('SETLANGUAGE', 'en')
                        break;
                    }
                default:
                    break;
            }
        }
    },
    mounted() {
      
    },
    created() {
        this.$store.dispatch('QUERYMAINN')
    }
}
</script>

<style lang="scss" scoped>
.headTop {
    width: 1200px;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    margin: 0 auto;
    color: #fff;
    font-size: 16px;
    .logoImg {
        display: block;
        width: 276px;
        height: 44px;
        margin-top: 8px;
    }
    .index {
        padding: 0 40px;
        text-align: center;
        cursor: pointer;
    }
    .link {
        cursor: pointer;
    }
    .person {
        cursor: pointer;
        img {
            width: 20px;
            height: 21px;
            margin-right: 13px;
        }
    }
    .language {
        margin: 0 40px;
        cursor: pointer;
        img {
            display: block;
            width: 20px;
            height: 20px;
        }
    }
}
</style>
