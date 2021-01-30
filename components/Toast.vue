<template>
    <div class="toast" :class="{'show':showToast} "> Thank you for contacting me! I will get back to you as soon as possible!</div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props: {
        showToast: Boolean
    },
    model:{
        event: 'hideToast'
    },
    watch: {
        showToast: function(newShowToast, oldShowToast){
            if(newShowToast == true){
                setTimeout(()=>{
                    this.$emit('hideToast');
                }, 3500);
            }
        }
    }
}
</script>

<style lang="scss">
.toast{
    visibility: hidden;
    min-width: 250px;
    max-width: 250px;
    margin-left: -125px;
    background-color: #333333cc;
    color: #ffffff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 60px;
}

.toast.show {
    visibility: visible;
    animation: fadein 0.5s, fadeout 0.5s 3s;
}

@keyframes fadein{
    from{
        top: 0px;
        opacity: 0;
    }
    to{
        top: 60px;
        opacity: 1;
    }
}
@keyframes fadeout{
    from{
        top: 60px;
        opacity: 1;
    }
    to{
        top: 0px;
        opacity: 0;
    }
}
</style>