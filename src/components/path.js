import { genPoints, genPath } from '../helpers/path'

export default {
  props: ['smooth', 'value', 'boundary', 'radius', 'id', 'max', 'min'],

  render (h) {
    const { value, smooth, boundary, radius, id, max, min } = this
    const points = genPoints(value, boundary, { max, min })
    const d = genPath(points, smooth ? radius : 0)

    return h('path', {
      attrs: { d, fill: 'none', stroke: `url(#${id})` }
    })
  }
}
