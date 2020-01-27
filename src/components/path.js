import { genPath } from '../helpers/path'

export default {
  props: ['smooth', 'value', 'boundary', 'radius', 'id', 'max', 'min', 'points'],

  render (h) {
    const { points, smooth, radius, id } = this
    const d = genPath(points, smooth ? radius : 0)

    return h('path', {
      attrs: { d, fill: 'none', stroke: `url(#${id})` }
    })
  }
}
