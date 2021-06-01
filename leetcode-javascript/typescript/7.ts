function reverse(x: number): number {
  let re = 0, min = - Math.pow(2, 31), max =  Math.pow(2, 31) - 1
  while(x !== 0) {
    re = re * 10 + x % 10
    x = ~~(x / 10)
    if (x < min || x > max) return 0
  }
  return re
};