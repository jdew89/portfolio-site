<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <button class="button is-primary is-outlined" @click="toggleSnow">
                    <fa class="icon" :class="{'rotate-button-snowflake': rotateSnowflake} " :icon="['fas','snowflake']"></fa>
                </button>
                
            </div>
            <a class="navbar-burger" :class="{'burger-open': mobileMenuActive}" role="button" aria-label="menu" aria-expanded="false" data-target="navbarTop" @click="toggleNavbarMenu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbarTop" :class="{'is-active':mobileMenuActive,'is-closing': mobileMenuClosing}">
            <div class="navbar-start">
                <div class="navbar-item">
                    <NuxtLink to="/" class="button is-primary is-outlined"> 
                        Home
                    </NuxtLink>
                </div>
                <div class="navbar-item">
                    <NuxtLink to="#about" class="button is-primary is-outlined"> 
                        About
                    </NuxtLink>
                </div>
                <div class="navbar-item">
                    <NuxtLink to="#portfolio" class="button is-primary is-outlined"> 
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
    model: {
        event: 'snowflake-toggle'
    },
    data(){
        return {
            mobileMenuActive: false,
            mobileMenuClosing: false,
            rotateSnowflake: true,
        }
    },
    methods: {
        toggleNavbarMenu(){
            //if menu active, set closing animation class
            //wait annimation time and then remove those classes
            if(this.mobileMenuActive){
                this.mobileMenuClosing = true;
                window.setTimeout(()=>{
                    this.mobileMenuClosing = false;
                    this.mobileMenuActive = false;
                },500)
            }
            else{
                this.mobileMenuActive = !this.mobileMenuActive;
            }
        },
        toggleSnow(){
            this.$emit('snowflake-toggle');
            this.rotateSnowflake = !this.rotateSnowflake;
        }
    }
    
}
</script>

<style lang="scss">
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

//change burger values
.navbar-burger span{
    height: 3px;
    width: 20px;
}

.navbar-burger span:nth-child(1){
    top: calc(50% - 8px);
}
.navbar-burger span:nth-child(2){
    top: calc(50% - 1px);
}
.navbar-burger span:nth-child(3){
    top: calc(50% + 6px);
}

//when avtive
.navbar-burger.burger-open span:nth-child(1){
    top: calc(50% - 8px);
    transform: rotate(45deg)
}
.navbar-burger.burger-open span:nth-child(2){
    visibility: hidden;
}
.navbar-burger.burger-open span:nth-child(3){
    top: calc(50% + 6px);
    transform: rotate(-45deg);
}

@media screen and (max-width: 1023px){
    .is-active{
        animation: open-menu 0.5s linear forwards;
    }
    .is-closing{
        
        animation: close-menu 0.5s linear forwards;
    }

}

@keyframes open-menu {
    from{
        transform: translateX(100%);
    }
    to{
        transform: translateX(0%);
    }
}
@keyframes close-menu {
    from{
        transform: translateX(0%);
    }
    to{
        transform: translateX(100%);
    }
}



</style>
