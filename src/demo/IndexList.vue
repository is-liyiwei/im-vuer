<template>
  <div class="demo-index-list">
    <im-index-list :dataList="dataList" @handleClick="myClick"></im-index-list>
  </div>
</template>

<script>

let dataList = [{
            title: '#',
            list: [{
              name: '3ar',
              id: 111
            },{
              name: '??dar',
              id: 222
            },{
              name: '~~~3dfefr',
              id: 333
            },{
              name: ']df35ar',
              id: 444
            }]
          },{
            title: 'A',
            list: [{
              name: 'Adar',
              id: 1
            },{
              name: 'Addar',
              id: 2
            },{
              name: 'Adfefr',
              id: 3
            },{
              name: 'Adf35ar',
              id: 4
            }]
          },{
            title: 'B',
            list: [{
              name: 'Bdar',
              id: 5
            },{
              name: 'Bdfsfar',
              id: 6
            },{
              name: 'Bdf42ar',
              id: 7
            },{
              name: 'Bdh46ar',
              id: 8
            },{
              name: 'Bd24tgar',
              id: 9
            }]
          },{
            title: 'C',
            list: [{
              name: 'Cdf2ar',
              id: 10
            },{
              name: 'Cdgrsar',
              id: 11
            },{
              name: 'Csefdar',
              id: 12
            },{
              name: 'Cdagdtgr',
              id: 13
            }]
          },{
            title: 'D',
            list: [{
              name: 'Ddrwar',
              id: 14
            },{
              name: 'Ddwrgar',
              id: 15
            },{
              name: 'Dwedar',
              id: 16
            },{
              name: 'Ddatwr',
              id: 17
            }]
          },{
            title: 'E',
            list: [{
              name: 'Edgergar',
              id: 18
            },{
              name: 'Eddrgar',
              id: 19
            },{
              name: 'Ed24far',
              id: 20
            },{
              name: 'Edgergar',
              id: 21
            },{
              name: 'Eddrgar',
              id: 22
            },{
              name: 'Ed24far',
              id: 23
            },{
              name: 'Edgergar',
              id: 24
            },{
              name: 'Eddrgar',
              id: 25
            },{
              name: 'Ed24far',
              id: 26
            },{
              name: 'Ed24far',
              id: 27
            },{
              name: 'Edgergar',
              id: 28
            },{
              name: 'Eddrgar',
              id: 29
            },{
              name: 'Ed24far',
              id: 30
            }]
          },{
            title: 'F',
            list: [{
              name: 'Fdar',
              id: 31
            }]
          },{
            title: 'G',
            list: [{
              name: 'Gdar',
              id: 32
            }]
          },{
            title: 'H',
            list: [{
              name: 'Hdar',
              id: 33
            }]
          },{
            title: 'I',
            list: [{
              name: 'Idar',
              id: 34
            }]
          },{
            title: 'J',
            list: [{
              name: 'Jdar',
              id: 35
            }]
          },{
            title: 'K',
            list: [{
              name: 'Kdar',
              id: 36
            }]
          },{
            title: 'L',
            list: [{
              name: 'Ldar',
              id: 37
            }]
          },{
            title: 'M',
            list: [{
              name: 'Mdar',
              id: 38
            }]
          },{
            title: 'N',
            list: [{
              name: 'Ndar',
              id: 39
            }]
          },{
            title: 'O',
            list: [{
              name: 'Odar',
              id: 40
            }]
          },{
            title: 'P',
            list: [{
              name: 'Pdar',
              id: 41
            }]
          },{
            title: 'Q',
            list: [{
              name: 'Qdar',
              id: 42
            }]
          },{
            title: 'R',
            list: [{
              name: 'Rdar',
              id: 43
            }]
          },{
            title: 'S',
            list: [{
              name: 'Sdar',
              id: 44
            }]
          },{
            title: 'T',
            list: [{
              name: 'Tdar',
              id: 45
            }]
          },{
            title: 'U',
            list: [{
              name: 'Udar',
              id: 46
            }]
          },{
            title: 'V',
            list: [{
              name: 'Vdar',
              id: 47
            }]
          },{
            title: 'W',
            list: [{
              name: 'Wdar',
              id: 48
            }]
          },{
            title: 'X',
            list: [{
              name: 'Xdar',
              id: 49
            }]
          },{
            title: 'Y',
            list: [{
              name: 'Ydar',
              id: 50
            }]
          },{
            title: 'Z',
            list: [{
              name: 'Zdar',
              id: 51
            }]
          }]
export default {
  name: 'index-list',
  data () {
    return {
      dataList: dataList
    }
  },
  methods: {
    myClick (item) {
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
