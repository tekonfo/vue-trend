import { genPoints, genPath } from '../helpers/path'

export default {
  props: ['id', 'max', 'min'],

  render (h) {
    const {id, max, min } = this
    const points = genPoints(data, boundary, { max, min })
    const d = genPath(points, smooth ? radius : 0)

    return h(
      'g',
      points.map(function (point) {
        return h('text', {
          attr: {
            x: 10,
            y: 100
          }
        },
        point.name)
      })
    )
  }
}
