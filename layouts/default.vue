<template>
  <div class="wrapper">
    <Snowflakes />
    <Navbar />
    <div class="push-footer-bottom">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

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
