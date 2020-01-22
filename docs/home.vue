<template>
  <main class="main">
    <h1>モチベーショングラフ</h1>
    
    <trend
      :data="data"
      :gradient="gradient"
      :height="500"
      :width="1500"
      auto-draw
      smooth>
    </trend>

    <footer>Released under the <a href="//github.com/QingWei-Li/vue-trend/blob/master/LICENSE">MIT</a> license. <a href="//github.com/QingWei-Li/vue-trend">View source.</a></footer>
  </main>
</template>

<script>
import Trend from '../src/index'

export default {
  components: { Trend },
  created () {
    this.data = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
    this.gradient = ['#6fa8dc', '#42b983', '#2c3e50']
  }
}
</script>
