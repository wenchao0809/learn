var reverseBits = function(n) {
  n = n.toString(2)
  n = n.padStart(32, '0')
  n = n.split('')
  return parseInt(n.reverse().join(''), 2)
};

console.log(reverseBits(43261596))