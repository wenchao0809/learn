package gosort

// MergeSort 归并排序 (a interface{}, b interface{})
func MergeSort(a SortAble) SortAble {
	return sort(a)
}

func sort(a SortAble) SortAble {
	l := len(a)
	if l < 2 {
		return a
	}
	mid := l / 2
	left := sort(a[0:mid])
	right := sort(a[mid:])
	return merge(left, right)
}

func merge(l SortAble, r SortAble) SortAble {
	i, j := 0, 0
	m, n := len(l), len(r)
	var res []CompareAble
	for i < m && j < n {
		if cr, err := l[i].Compare(r[j]); err == nil && cr > 0 {
			res = append(res, l[i])
			i++
		} else {
			res = append(res, r[j])
			j++
		}
	}
	res = append(res, l[i:]...)
	res = append(res, r[j:]...)
	return res
}
