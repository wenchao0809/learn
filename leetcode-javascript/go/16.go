package main

import (
	"fmt"
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	l := len(nums)
	sum, best := 0, math.MaxInt32
	update := func(cur int) {
		if abs(cur-target) < best {
			sum = cur
			best = abs(cur - target)
		}
	}
	for i := 0; i < l; i++ {
		j, k := i+1, l-1
		for j < k {
			cur := nums[i] + nums[j] + nums[k]
			update(cur)
			if cur == target {
				return target
			} else if cur > target {
				k--
			} else {
				j++
			}
		}
	}
	return sum
}

func abs(x int) int {
	if x < 0 {
		return -1 * x
	}
	return x
}
func main() {
	fmt.Println(threeSumClosest([]int{-1, 2, 1, -4}, 1))
}
