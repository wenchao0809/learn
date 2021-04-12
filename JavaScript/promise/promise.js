let executeCount = 0
const fn = nums => {
  executeCount++
  return nums.map(x => x * 2)
}

const batcher = (f) => {
  let nums = [];
  let p;
  
  return (arr) => {
    if(!p) {
	    p = Promise.resolve().then(_ => f(nums));
    }
    
    const start = nums.length;
    nums = nums.concat(arr);
    const end = nums.length;
    console.log(p)

    return p.then(ret => {
      nums = [];
      p = null;
      return ret.slice(start, end);
    });
  };
};

const batchedFn = batcher(fn);

const main = async () => {
  const [r1, r2, r3] = await Promise.all([
    batchedFn([1,2,3]),
    batchedFn([4,5]),
    batchedFn([7,8,9])
  ]);

  //满足以下 test case
  // assert(r1).tobe([2, 4, 6])
  // assert(r2).tobe([8, 10])
  // assert(r3).tobe([14, 16, 18])
  // assert(executeCount).tobe(1)
}
main()