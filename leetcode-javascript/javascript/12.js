/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let s = ''
  while (num > 0) {
    if (num >= 1000) {
      s += intToRomanS(1000)
      num -= 1000
    } else if (num >= 900) {
      s += intToRomanS(900)
      num -= 900
    } else if (num >= 500) {
      s += intToRomanS(500)
        num -= 500
    } else if (num >= 400) {
      s += intToRomanS(400)
        num -= 400
    } else if (num >= 100) {
      s += intToRomanS(100)
      num -= 100
    } else if (num >= 90) {
      s += intToRomanS(90)
      num -= 90
    } else if (num >= 50) {
      s += intToRomanS(50)
        num -= 50
    } else if (num >= 40) {
      s += intToRomanS(40)
      num -= 40
    } else if (num >= 10) {
      s += intToRomanS(10)
      num -= 10
    } else if (num >= 9) {
      s += intToRomanS(9)
      num -= 10
    } else if (num >= 5) {
      s += intToRomanS(5)
      num -= 5
    } else if (num >= 4) {
      s += intToRomanS(4)
      num -= 4
    } else if (num >= 1) {
      s += intToRomanS(1)
      num -= 1
    }
  }
  return s
};

var intToRomanS = function(num) {
  switch (num) {
    case 1:
      return 'I'
    case 4:
      return 'IV'
    case 5:
      return 'V'
    case 9:
      return 'IX'
    case 10:
      return 'X'
    case 40:
      return 'XL'
    case 50:
      return 'L'
    case 90:
      return 'XC'
    case 100:
      return 'C'
    case 400:
      return 'CD'
    case 500:
      return 'D'
    case 900:
      return 'CM'
    case 1000:
      return 'M'
    default:
      return ''
  }
}

const map = new Map([
  [1000, "M"], 
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
])
var intToRoman2 = function(num) {
  let s = ''
  while (num > 0) {
    const keys = map.keys()
    for (let key of keys) {
      if (num >= key) {
        s += map.get(key)    
        num -= key
        break
      }
    }
  }
  return s
}
console.log(intToRoman2(3999))
console.log(intToRoman2(1))

// console.log(intToRoman(1901))
// console.log(intToRoman(4))
// console.log(intToRoman(5))
// console.log(intToRoman(1))