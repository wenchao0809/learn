package main

import (
	"fmt"
	"sort"
)

func singleNumber(nums []int) int {
	l := len(nums)
	cur, count := nums[0], 1
	sort.Slice(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})
	for i := 0; i < l; i++ {
		if cur != nums[i] {
			if count > 1 {
				cur = nums[i]
				count = 1
				continue
			} else {
				break
			}
		}
		count++
	}
	return cur
}

func main() {
	nums := []int{2, 2, 3, 2}
	fmt.Println(singleNumber(nums))
}
