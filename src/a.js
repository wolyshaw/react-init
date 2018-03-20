import { b } from './b'
console.log('this is module a')

export const a = () => {
  console.log(b)
  console.log('a module')
}
