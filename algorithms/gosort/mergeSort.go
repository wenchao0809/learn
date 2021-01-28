package gosort

import "fmt"

// MergeSort 归并排序 (a interface{}, b interface{})
func MergeSort(a SortAble) SortAble {
	c := 0
	res := sort(a, &c)
	fmt.Printf("reverse count=%d\n", c)
	return res
}

var c int

func sort(a SortAble, c *int) SortAble {
	l := len(a)
	if l < 2 {
		return a
	}
	mid := l / 2
	left := sort(a[0:mid], c)
	right := sort(a[mid:], c)
	return merge(left, right, c)
}

func merge(l SortAble, r SortAble, c *int) SortAble {
	i, j := 0, 0
	m, n := len(l), len(r)
	var res []CompareAble
	for i < m && j < n {
		if cr, err := l[i].Compare(r[j]); err == nil && cr >= 0 {
			res = append(res, l[i])
			i++
		} else {
			res = append(res, r[j])
			*c += (m - i)
			j++
		}
	}
	res = append(res, l[i:]...)
	res = append(res, r[j:]...)
	return res
}

//CountReversePair 暴力统计数组中的逆序对
func CountReversePair(a SortAble) int {
	count := 0
	l := len(a)
	for i := 0; i < l; i++ {
		for j := i + 1; j < l; j++ {
			if cr, _ := a[i].Compare(a[j]); cr < 0 {
				count++
			}
		}
	}
	return count
}
