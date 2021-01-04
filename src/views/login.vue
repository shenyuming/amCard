<template>
    <div class="loginWrap">
      <div class="loginInner">
          <div class="login">
              <img src="@/assets/image/login.png" alt="">
          </div>
          <p class="title">Sign in with Discord</p>
          <p class="but">Sign In Discord</p>
      </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            
        };
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
};
</script>

<style lang="scss" scoped>
.loginWrap{
   width: 634px;
   height: 380px;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   margin: auto;
   background-color: #2e303e;
   border-radius: 20px;
   .loginInner{
       text-align: center;
       width: 300px;
       margin: 0 auto;
        .login{
            padding-top: 60px;
        }
        .title{
            padding: 20px 0 40px 0;
            font-size: 16px;
        }
        .but{
            background-image: linear-gradient(180deg, #c3cdff 0%, #7280cf 100%);
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            height: 60px;
            line-height: 60px;
            border-radius: 30px;
            text-align: center;
            width: 200px;
            color: #fff;
            margin: 0 auto;
        }
    }
}
</style>
