export default {
  props: ['id', 'boundary'],

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
        h('line', {
          attrs: {
            x1: minX,
            x2: maxX,
            y1: maxY / 2,
            y2: maxY / 2
          }
        }),
        h('line', {
          attrs: {
            x1: minX,
            x2: minX,
            y1: minY,
            y2: maxY
          }
        }),
        h('text', {
          domProps: {
            innerHTML: '年齢'
          },
          attrs: {
            x: maxX - 40,
            y: maxY / 2 + 20
          }
        }),
        h('text', {
          domProps: {
            innerHTML: 'モチベーション'
          },
          attrs: {
            'writing-mode': 'tb',
            x: minX + 8,
            y: maxY / 2
          }
        })
      ]
    )
  }
}
