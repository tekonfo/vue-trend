<template>
  <g>
    <circle v-for="(d, index) in points" v-bind:key="index" 
    :cx="d.x" 
    :cy="d.y" 
    r="5" 
    :fill="index===selectedId ? 'red' : 'black'"
    @mousedown="setId($event, index)"
    @mouseover="showText($event, index)"
    @mouseleave="closeText($event, index)"
    >
    </circle>
    
    <text v-for="(d, index) in points" v-bind:key="'text-' + index" 
    :x="d.x" 
    :y="d.y" 
    fill="black"  
    v-show="index === showTextId"
    >{{ d.text }}
    </text>
    
    <text v-for="(d, index) in points" v-bind:key="'axis-' + index" 
    :x="d.x"
    :y="centerLine + 5"
    dominant-baseline="hanging"
    text-anchor="middle" 
    fill="black" 
    >{{ d.originX }}
    </text>
    

  </g>
</template>

<script>
  export default {
    props: ['smooth', 'boundary', 'radius', 'id', 'max', 'min', 'points'],

    data: function () {
      return {
        beforeMouseY: 0,
        isMove: false,
        selectedId: -1,
        showTextId: -1,
        fill: 'red'
      }
    },

    computed: {
      centerLine: function () {
        return (this.boundary.maxY / 2)
      }
    },

    methods: {
      setId: function (event, index) {
        console.log('mouseDown')
        this.isMove = true
        this.selectedId = index
        event.preventDefault()
      },
      showText: function (event, index) {
        this.showTextId = index
        event.preventDefault()
      },
      closeText: function (event, index) {
        this.showTextId = -1
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
    }
  }
</script>





