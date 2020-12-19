import a from './module/a'
import b from './module/b'

a()
b()

import('./module/c')
  .then(module => module.default())