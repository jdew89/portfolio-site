<template>
    <div class="snowflakes" aria-hidden="true">
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
        <div class="snowflake">
            ❅
        </div>
        <div class="snowflake">
            ❆
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
//Can customize this part
.snowflake {
  color: #fff;
  font-size: 1em;
  font-family: Arial, sans-serif;
  text-shadow: 0 0 5px #000;
  opacity: 0.6;
}

@-webkit-keyframes snowflakes-fall{
    0%
    {top:-10%}
    100%
    {top:100%}
}

@-webkit-keyframes snowflakes-shake{
    0%,
    100%
    {
        -webkit-transform:translateX(0);
        transform:translateX(0)
    }
    50%
    {
        -webkit-transform:translateX(80px);
        transform:translateX(80px)}
}

@keyframes snowflakes-fall{
    0%
    {top:-10%}
    100%
    {top:100%}
}

@keyframes snowflakes-shake{
    0%,
    100%
    {
        transform:translateX(0)
    }
    50%
    {
        transform:translateX(80px)
    }
}

.snowflake{
    position:fixed;
    top:-10%;
    z-index:0;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    cursor: default;
    -webkit-animation-name:snowflakes-fall,snowflakes-shake;
    -webkit-animation-duration:10s,3s;
    -webkit-animation-timing-function:linear,ease-in-out;
    -webkit-animation-iteration-count:infinite,infinite;
    -webkit-animation-play-state:running,running;
    animation-name:snowflakes-fall,snowflakes-shake;
    animation-duration:10s,3s;
    animation-timing-function:linear,ease-in-out;
    animation-iteration-count:infinite,infinite;
    animation-play-state:running,running
}

.snowflake:nth-of-type(0){
    left:1%;
    animation-delay:0s,0s
}

.snowflake:nth-of-type(1){
    left:10%;
    animation-delay:5s,1s
}

.snowflake:nth-of-type(2){
    left:20%;
    animation-delay:6s,.5s
}

.snowflake:nth-of-type(3){
    left:30%;
    animation-delay:4s,2s
}

.snowflake:nth-of-type(4){
    left:40%;
    animation-delay:2s,2s
}

.snowflake:nth-of-type(5){
    left:50%;
    animation-delay:8s,3s
}

.snowflake:nth-of-type(6){
    left:60%;
    animation-delay:7s,2s
}

.snowflake:nth-of-type(7){
    left:70%;
    animation-delay:2.5s,1s
}

.snowflake:nth-of-type(8){
    left:80%;
    animation-delay:1s,0s
}

.snowflake:nth-of-type(9){
    left:90%;
    animation-delay:3s,1.5s
}

.snowflake:nth-of-type(10){
    left:25%;
    animation-delay:9s,0s
}
    
.snowflake:nth-of-type(11){
    left:65%;
    animation-delay:4s,2.5s
}

</style>