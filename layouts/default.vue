<template>
  <div class="wrapper">
    <Snowflakes v-if="snowflakesOn"/>
    <Navbar @snowflake-toggle="snowflakesOn = !snowflakesOn"/>
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
      snowflakesOn: true,
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
