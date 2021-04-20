package main

import (
	"fmt"
	"math"
)

func containsNearbyAlmostDuplicate(nums []int, k int, t int) bool {
	l := len(nums)
	for i := 0; i < l; i++ {
		for j := i + 1; j-i <= k && j < l; j++ {
			if int(math.Abs(float64(nums[j]-nums[i]))) <= t {
				return true
			}
		}
	}
	return false
}

func main() {
	fmt.Print(containsNearbyAlmostDuplicate([]int{1, 2, 3, 1}, 3, 0))
}
