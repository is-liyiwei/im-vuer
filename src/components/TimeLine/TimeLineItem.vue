<template>
  <div class="im-timeline-box-item">
    <div class="im-timeline-box-item-text">{{item.text}}</div>
    <div class="im-timeline-box-item-time">{{item.time}}</div>
  </div>
</template>

<script>
export default {
  name: 'timeline-item',
  data () {
    return {
      
    }
  },
  props: {
    item: {
      type: Object
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

</style>
