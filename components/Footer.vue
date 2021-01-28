<template>
  <div>
    <footer class="footer">
        <div class="container">
          <nav class="level">
            <div class="level-item has-text-centered">
              <NuxtLink to="/" class="button is-primary is-outlined"> Home </NuxtLink>
            </div>
            <div class="level-item has-text-centered">
              <NuxtLink to="#about" class="button is-link is-outlined"> 
                  About
              </NuxtLink>
            </div>
            <div class="level-item has-text-centered">
              <NuxtLink to="#portfolio" class="button is-link is-outlined"> 
                  Portfolio
              </NuxtLink>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a href="https://github.com/jdew89" class="button is-rounded is-outlined is-link is-small" target="_blank">
                  <fa :icon="['fab', 'github']" class="icon is-large"/>
                </a>
              </div>
              <div class="level-item">
                <a href="https://www.linkedin.com/in/jeffrey-dewitt-902b0560/" class="button is-rounded is-outlined is-link is-small" target="_blank">
                  <fa :icon="['fab', 'linkedin']" class="icon is-large"/>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </footer>
      <img class="image" src="/snow-hills-plain.svg" alt="" width="100%">
  </div>
</template>

<style>
.footer{
  padding-bottom: 3rem;
}
</style>
