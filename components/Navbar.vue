<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <button class="button is-primary is-outlined" @click="toggleSnow">
                    <fa class="icon" :class="{'rotate-button-snowflake': rotateSnowflake} " :icon="['fas','snowflake']"></fa>
                </button>
                
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
                    <NuxtLink to="#portfolio" class="button is-primary is-outlined"> 
                        Portfolio
                    </NuxtLink>
                </div>
                <div class="navbar-item">
                    <NuxtLink to="#about" class="button is-primary is-outlined"> 
                        About
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
    model: {
        event: 'snowflake-toggle'
    },
    data(){
        return {
            mobileMenuActive: false,
            rotateSnowflake: true,
        }
    },
    methods: {
        toggleSnow(){
            this.$emit('snowflake-toggle');
            this.rotateSnowflake = !this.rotateSnowflake;
        }
    }
    
}
</script>

<style>
.rotate-button-snowflake{
    animation: rotation 7s infinite linear;
}

@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(359deg);
    }
}
</style>
