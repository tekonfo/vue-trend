<template>
  <g>
    <circle v-for="(d, index) in points" v-bind:key="index" 
    :cx="d.x" 
    :cy="d.y" 
    r="5" 
    :fill="index===selectedId ? 'red' : 'black'"
    @mousedown="setId($event, index)"
    >
    </circle>
  </g>
</template>

<script>
  import { genPoints } from '../helpers/path'

  export default {
    props: ['smooth', 'value', 'boundary', 'radius', 'id', 'max', 'min'],

    data: function () {
      return {
        points: [],
        beforeMouseY: 0,
        isMove: false,
        selectedId: -1,
        fill: 'red'
      }
    },

    methods: {
      setId: function (event, index) {
        console.log('mouseDown')
        this.isMove = true
        this.selectedId = index
        event.preventDefault()
      },
      // move中は前回まで動かした差分を取りながら座標を変化させていく
      move: function (event) {
        if (!this.isMove) return
        console.log('move')
        var mouseY = event.offsetY
        var dy = 0
        if (this.beforeMouseY) {
          dy = mouseY - this.beforeMouseY
        }
        this.beforeMouseY = mouseY
        var tempY = dy + Number(this.points[this.selectedId].y)
        if (tempY > 0) this.points[this.selectedId].y = tempY
        // 親イベントを発火させる
        event.preventDefault()
      },
      // マウスのクリックが終わった段階で初期化
      mouseUp (e) {
        console.log('mouseUp')
        this.selectedId = -1
        this.isMove = false
        this.beforeMouseX = null
        this.beforeMouseY = null
        e.preventDefault()
      }
    },

    // マウス操作関連
    mounted () {
      console.log('MOUNT LISTENER ON')
      document.addEventListener('mouseup', this.mouseUp)
      document.addEventListener('mousemove', this.move)
    },

    beforeDestroy () {
      console.log('MOUNT LISTENER OFF')
      document.removeEventListener('mouseup', this.mouseUp)
      document.removeEventListener('mousemove', this.move)
    },

    created: function () {
      const maxMin = { max: this.max, min: this.min }
      this.points = genPoints(this.value, this.boundary, maxMin)
    }
  }
</script>
