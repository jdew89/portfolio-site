<template>
  <footer class="footer">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <NuxtLink to="/" class="button is-primary is-outlined"> Home </NuxtLink>
          </div>
          <div class="level-item has-text-centered">
            <NuxtLink to="/portfolio" class="button is-link is-outlined"> 
              <span class="icon">
                <fa :icon="['fab', 'github'] " />
              </span>
              <span>
                Portfolio 
              </span>
            </NuxtLink>
          </div>
          <div class="level-right">
            <div class="level-item">
              <a href="https://github.com/jdew89" class="button is-rounded is-outlined is-link" target="_blank">
                <fa :icon="['fab', 'github']" class="icon is-large"/>
              </a>
            </div>
            <div class="level-item">
              <a href="https://github.com/jdew89" class="button is-rounded is-outlined is-link" target="_blank">
                <fa :icon="['fab', 'linkedin']" class="icon is-large"/>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
</template>

<style>

</style>
