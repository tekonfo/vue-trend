<template>
  <main class="main">
    <h1>モチベーショングラフ</h1>
    
    <trend
      :value="points"
      :gradient="gradient"
      :height="500"
      :width="1000"
      :isMove="isMove"
      :selectedId="selecetedId"
      auto-draw
      smooth>
    </trend>

    <controll
      :points="points"
    ></controll>

    一覧
    <div v-for="point in points" v-bind:key="'input-' + point.x">
      {{ point.x }}
      <input v-model="point.text">
      <button @click="deletePoint(point.x)">削除</button>
    </div>
    <input v-model="x">
    <button @click="addPoint(x)">追加</button>

    <!-- <footer>Released under the <a href="//github.com/QingWei-Li/vue-trend/blob/master/LICENSE">MIT</a> license. <a href="//github.com/QingWei-Li/vue-trend">View source.</a></footer> -->
  </main>
</template>

<script>
import Trend from '../src/index'
import Controll from '../src/components/controll'

export default {
  data: {
    x: 0,
    isMove: false,
    selecetedId: 0,
    points: [],
    gradient: []
  },
  components: { Trend, Controll },
  created () {
    // x をIDみたいなものにしよう
    // yの値はemitで伝搬させないといけないなーーー
    this.points = [
      { x: 0, y: 10, text: '誕生' },
      { x: 1, y: 2, text: '誕生' },
      { x: 5, y: 5, text: '誕生' },
      { x: 10, y: 10, text: '誕生' },
      { x: 15, y: 30, text: '誕生' },
      { x: 20, y: 0, text: '誕生' },
      { x: 23, y: 8, text: '誕生' }
    ]
    this.gradient = ['#6fa8dc', '#42b983', '#2c3e50']
  },
  methods: {
    deletePoint: function (x) {
      const index = this.points.findIndex((v) => v.x === x)
      this.points.splice(index, 1)
    },
    addPoint: function (x) {
      const newPoint = { x: x, y: 0, text: '' }
      const index = this.points.findIndex((v) => v.x > x)
      this.points.splice(index, 0, newPoint)
    }
  }
}
</script>
