import path from 'path'
import demo from '../middleware/demo'

export default {
  controller: {
    dir: path.resolve(__dirname, '../app/controller')
  },
  router: {
    // perfix: '/api'
  },
  middleware: [
    demo
  ]
}
