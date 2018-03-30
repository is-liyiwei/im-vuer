<template>
  <div class="im-layer">

  </div>
</template>

<script>
export default {
  name: 'layer',
  data () {
    return {
      
    }
  },
  components: {

  },
  created: function () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
