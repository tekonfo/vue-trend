export default {
  props: ['id', 'boundary', 'marginL'],

  render (h) {
    const { minX, minY, maxX, maxY } = this.boundary

    return h(
      'g', {
        attrs: {
          stroke: 'black',
          'stroke-width': 1
        }
      },
      [
        // 横軸
        h('line', {
          attrs: {
            x1: minX + this.marginL,
            x2: maxX + this.marginL,
            y1: maxY / 2,
            y2: maxY / 2,
            'stroke-dasharray': 10
          }
        }),
        // 縦軸
        h('line', {
          attrs: {
            x1: minX + this.marginL,
            x2: minX + this.marginL,
            y1: minY,
            y2: maxY
          }
        }),
        h('text', {
          domProps: {
            innerHTML: '年齢'
          },
          attrs: {
            x: maxX + this.marginL,
            y: maxY / 2 + 20
          }
        }),
        h('text', {
          domProps: {
            innerHTML: 'モチベーション'
          },
          attrs: {
            'writing-mode': 'tb',
            x: minX,
            y: maxY / 2 - 50
          }
        })
      ]
    )
  }
}
