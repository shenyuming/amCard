<template>
    <div class="layOutWrap">
       <ul class="menu">
           <li v-for="(item,index) in listData" :key="index" :class="{'active': currentIndex===index}" @click="chooseWay(index)">{{item.name}}</li>
       </ul>
    </div>
</template>

<script>
import layOutComponent from "@/components/layOutComponent";
export default {
  name: "layOut",
  components: {
    layOutComponent
  },
  data() {
    return {
        listData:[{
            name:'Creat Card',
            url:'/create'
        },{
            name:'Recharge Card',
            url:'/recharge'
        },{
            name:'Trade List',
            url:'/tradeList'
        },{
            name:'Trade Record',
            url:''
        },{
            name:'User List',
            url:''
        }],
        currentIndex: 0
    };
  },
  methods: {
      chooseWay(index){
          this.currentIndex = index
      }
  
  },
  created() {

  },
  mounted() {

  }
};
</script>

<style lang="scss" scoped>
.layOutWrap {
    width: 151px;
    background-color: #0A0D2B;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    color: #fff;
    .menu{
        padding-top: 20px;
        li{
            line-height: 50px;
            text-align: center;
            height: 50px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            &.active{
                color: #fff;
                background-color: #FF9279;
            }
        }
    }
}
</style>
