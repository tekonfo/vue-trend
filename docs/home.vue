<template>
  <main class="main">
    <h1>モチベーショングラフ</h1>
    
    <trend
      :value="points"
      :gradient="gradient"
      :height="200"
      :width="1000"
      :isMove="isMove"
      :selectedId="selecetedId"
      auto-draw
      smooth>
    </trend>

    <footer>Released under the <a href="//github.com/QingWei-Li/vue-trend/blob/master/LICENSE">MIT</a> license. <a href="//github.com/QingWei-Li/vue-trend">View source.</a></footer>
  </main>
</template>

<script>
import Trend from '../src/index'

export default {
  data: {
    isMove: false,
    selecetedId: 0,
    points: [],
    gradient: []
  },
  components: { Trend },
  created () {
    // this.points = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
    this.points = [
      { x: 0, y: 10 },
      { x: 1, y: 2 },
      { x: 5, y: 5 },
      { x: 10, y: 10 },
      { x: 15, y: 30 },
      { x: 20, y: 0 },
      { x: 23, y: 8 }
    ]
    this.gradient = ['#6fa8dc', '#42b983', '#2c3e50']
  }
}
</script>
