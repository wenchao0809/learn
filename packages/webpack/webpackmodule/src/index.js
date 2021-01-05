import a from './module/a'
import b from './module/b'
import e from './module/e'

a()
b()
e()
import('./module/c')
  .then(module => module.default())