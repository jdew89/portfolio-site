<template>
  <div class="wrapper">
    <div class="container">
      <div>
        <h1 class="title">
          Contact
        </h1>
      </div>
      <button class="button is-primary">Hello</button>
    </div>
    <footer class="footer">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <p class="heading">
              <nuxt-link to="/"> Home </nuxt-link>
            </p>
          </div>
          <div class="level-item has-text-centered">
            <nuxt-link to="/portfolio"> Portfolio </nuxt-link>
          </div>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
body{
	display: flex;
	min-height: 100vh;
	flex-direction: column;
	overflow-x: hidden;
}

//pushed footer to bottom
.wrapper{
	flex: 1
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
