<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <NuxtLink to="/" class="is-primary" >
                        <fa :icon="['fab', 'centercode']" class="icon is-large"/>
                </NuxtLink>
            </div>
            <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarTop" @click="mobileMenuActive = !mobileMenuActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarTop" :class="{'is-active':mobileMenuActive}">
            <div class="navbar-start">
                <div class="navbar-item">
                    <NuxtLink to="/" class="button is-primary is-outlined"> 
                        Home
                    </NuxtLink>
                </div>
                <div class="navbar-item">
                    <NuxtLink to="/portfolio" class="button is-primary is-outlined"> 
                        Portfolio
                    </NuxtLink>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a href="https://github.com/jdew89" class="button is-rounded is-outlined is-link is-small" target="_blank">
                            <fa :icon="['fab', 'github']" class="icon is-large"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jeffrey-dewitt-902b0560/" class="button is-rounded is-outlined is-link is-small" target="_blank">
                            <fa :icon="['fab', 'linkedin']" class="icon is-large"/>
                        </a>

                    </div>
                </div>
                <div class="navbar-item">
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            mobileMenuActive: false,
        }
    }
}
</script>

<style>

</style>
