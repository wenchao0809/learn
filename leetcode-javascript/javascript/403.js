/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  const l = stones.length
  const map = new Map()
  for (i = 0; i < l; i++) {
    // 保存值和索引
    map.set(stones[i], i)
  }
 /**
 * @param {number[]} stones
 * @param {number} lastStep
 * @return {boolean}
 */
  function dfs(stones, start, end, lastStep) {
    if (start === end) return true
    let nexts = [], res = false
    for (let j = lastStep - 1; j < lastStep + 2; j++) {
      if (j <= 0) continue
      let t = map.get(j + stones[start])
      // 保存开始位置和上一步跳跃距离
      if (t) nexts.push([t, j])
    }
    for (let a of nexts) {
      if (res) break
      const [index, steps] = a 
      res = res || dfs(stones, index, end, steps)
    }
    return res 
  }
  return dfs(stones, 0, stones.length - 1, 0)
};

console.log(canCross([0,1,3,5,6,8,12,17]))
console.log(canCross([0,1,2,3,4,8,9,11]))

var canCross = function(stones) {
  const n = stones.length;
  rec = new Array(n).fill(0).map(() => new Map());

  const dfs = (stones, i, lastDis) => {
      if (i === stones.length - 1) {
          return true;
      }
      if (rec[i].has(lastDis)) {
          return rec[i].get(lastDis);
      }
      for (let curDis = lastDis - 1; curDis <= lastDis + 1; curDis++) {
          if (curDis > 0) {
              const j = lower_bound(stones, curDis + stones[i]);
              if (j !== stones.length && stones[j] === curDis + stones[i] && dfs(stones, j, curDis)) {
                  rec[i].set(lastDis, true);
                  return rec[i].get(lastDis);
              }
          }
      }
      rec[i].set(lastDis, false);
      return rec[i].get(lastDis);
  }

  return dfs(stones, 0, 0);
};

function lower_bound(nums, target) {
  let lo = 0, hi = nums.length;

  while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] >= target) {
          hi = mid;
      } else {
          lo = mid + 1;
      }
  }
  return lo;
}
