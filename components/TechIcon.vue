<template>
    <div class="tooltip">
        <fa :icon="fasIcon" class="icon is-medium tooltip" />
        <span class="tooltiptext">
            {{tooltipText}}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        fasIcon: Array,
        tooltipText: String,
    }
}
</script>

<style lang="scss">
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  position: absolute;
  width: 100px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  top: 100%;
  left: 50%;
  margin-left: -50px;
  z-index: 1;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>
