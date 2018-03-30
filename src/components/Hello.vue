<template>
  <div class="im-step">
    改class，下面的less第一个名字，下面的name属性
  </div>
</template>

<script>
export default {
  name: 'step',
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
  &-step {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
