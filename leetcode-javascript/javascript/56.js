/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let res = [intervals[0]]
  let j = 0
  for (let i = 1; i < intervals.length; i++) {
    const curEnd =  res[j][1]
    const [start, end] = intervals[i]
    if (start <= curEnd) {
      // 有重叠
      res[j][1] = Math.max(end, curEnd)
    } else {
      // 无重叠
      res.push(intervals[i])
      ++j
    }
  }
  return res
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[4,5]]))
// console.log(merge([[1, 5]]))
console.log(merge([[10,30],[20,60],[80,100],[150,180]]))