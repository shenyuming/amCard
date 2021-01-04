<template>
   <div class="app-wrapper">
     <layOutComponent></layOutComponent>
      <div class="main-container" :style="{ marginLeft: '150px' }">
        <app-main />
      </div>
   </div>
</template>

<script>
import layOutComponent from "./components/layOutComponent"
import AppMain from './components/appMain'
export default {
  name: "layOut",
  components: {
    layOutComponent,
    AppMain
  },
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
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
</style>
