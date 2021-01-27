package gosort

import "fmt"

// MergeSort 归并排序 (a interface{}, b interface{})
func MergeSort(a SortAble) SortAble {
	res := sort(a)
	fmt.Printf("reverse count=%d\n", c)
	return res
}

var c int

func sort(a SortAble) SortAble {
	l := len(a)
	if l < 2 {
		return a
	}
	mid := l / 2
	left := sort(a[0:mid])
	right := sort(a[mid:])
	return merge(left, right, &c)
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
			*c++
			j++
		}
	}
	if i < m {
		fmt.Printf("test ----1111\n")
		// 减1是为了去重 因为当前元素所产生的逆序对已经在for循环中统计过了
		*c += (m - i - 1) * n
	}
	res = append(res, l[i:]...)
	res = append(res, r[j:]...)
	return res
}
