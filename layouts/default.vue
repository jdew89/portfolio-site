<template>
  <div class="wrapper">
    <Snowflakes v-if="get_show_animations"/>
    <Navbar />
    <div class="push-footer-bottom">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed: {
    get_show_animations(){
      return this.$store.state.showAnimations;
    }
  }
}
</script>

<style lang="scss">
.wrapper{
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	overflow-x: hidden;
}

//pushed footer to bottom
.push-footer-bottom{
	flex: 1
}
</style>
