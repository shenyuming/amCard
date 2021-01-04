<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {

  }
}
</script>
<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 10px;
  background:#222645;
}
</style>
