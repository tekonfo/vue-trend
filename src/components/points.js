import { genPoints, genPath } from '../helpers/path'

export default {
  props: ['smooth', 'data', 'boundary', 'radius', 'id', 'max', 'min'],

  render (h) {
    const { data, smooth, boundary, radius, id, max, min } = this
    const points = genPoints(data, boundary, { max, min })
    console.log(points)

    var a_points =  points.map(function (point) {
        return h('circle', {
            attrs: {
                cx: point.x,
                cy: point.y,
                r: 3,
                fill: 'red'
            }
        })
    })

    console.log(a_points)

    // <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    return h('g',
        points.map(function (point) {
            return h('circle', {
                attrs: {
                    cx: point.x,
                    cy: point.y,
                    r: 1,
                    fill: 'black'
                }
            })
        })
    )
  }
}
