package gosort

// MergeSort 归并排序 (a interface{}, b interface{})
func MergeSort(a []CompareAble) []CompareAble {
	return sort(a)
}

func sort(a []CompareAble) []CompareAble {
	l := len(a)
	if l < 2 {
		return a
	}
	mid := l / 2
	left := sort(a[0:mid])
	right := sort(a[mid:])
	return merge(left, right)
}

func merge(l []CompareAble, r []CompareAble) []CompareAble {
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
