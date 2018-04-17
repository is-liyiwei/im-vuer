<template>
  <div class="hello" style="height: 100vh;">

    <im-pull-refresh ref="pull" :pullDownMethods="pullDownMethods" :pullUpMethods="pullUpMethods">
      <!-- <div slot="top-loading" style="height: 100%;">{{'123213'}}</div> -->
      <div class="item" v-for="(v, k) in list" :key="k">上下拉组件，效果仍不理想{{v}}</div>
      <!-- <div slot="bottom-loading" style="height: 100%;">{{'123213'}}</div> -->
    </im-pull-refresh>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      newData: 16
    }
  },
  methods: {
    pullDownMethods () {
      setTimeout( () => {
        this.list.unshift(this.newData++);
        this.$refs.pull.done();
      }, 1500)
    },
    pullUpMethods () {
      setTimeout( () => {
        this.list.push(this.newData++);
        this.$refs.pull.done();
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  height: 100px;
  line-height: 100px;
  font-size: .37rem;
  text-align: center;
}

.item:nth-of-type(1n) {
  background-color: #53b9dc;
}

.item:nth-of-type(2n) {
  background-color: #dbdbdb;
}
</style>
