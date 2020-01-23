
<template>
  <g>
    <circle v-for="(d, index) in points" v-bind:key="index" 
    :cx="d.x" 
    :cy="d.y" 
    r="3" 
    fill="red"
    @click="handleTitleClick"
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
        points: []
      }
    },

    methods: {
      handleTitleClick: function () {
        console.log('title clicked')
      }
    },

    created: function () {
      const maxMin = { max: this.max, min: this.min }
      this.points = genPoints(this.value, this.boundary, maxMin)
    }
  }
</script>
