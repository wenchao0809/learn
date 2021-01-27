package gosort

// CompareAble 可比较类型
type CompareAble interface {
	Compare(b CompareAble) (int, error)
}

//SortAble 可排序的数组
type SortAble []CompareAble

//SortFunc 排序函数
type SortFunc = func(a SortAble) SortAble

//Exchange 交换函数
// func (s *SortAble) Exchange(a *CompareAble, b *CompareAble) {
// 	if (*a).Compare(*b) > 0 {
// 		a, b = b, a
// 	}
// }

//Sort 排序函数
func (s SortAble) Sort(sortFunc SortFunc) []CompareAble {
	return sortFunc(s)
}
