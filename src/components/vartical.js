import { genPoints, genPath } from '../helpers/path'

export default {
  props: ['id', 'width', 'height'],

  render (h) {
    const {id, width, height } = this

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
            x1: 5,
            x2: width,
            y1: height / 2,
            y2: height / 2
          }
        }),
        h('line', {
          attrs: {
            x1: 5,
            x2: 5,
            y1: 0,
            y2: height
          }
        }),
        h('text', {
          domProps: {
            innerHTML: '年齢'
          },
          attrs: {
            x: width - 40,
            y: height / 2 + 20
          }
        }),
        h('text', {
          domProps: {
            innerHTML: 'モチベーション'
          },
          attrs: {
            'writing-mode': 'tb',
            x: 15,
            y: height / 2
          }
        })
      ]
    )
  }
}
