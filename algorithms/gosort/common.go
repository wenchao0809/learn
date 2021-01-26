package gosort

type CompareAble interface {
	Compare(b CompareAble) (int, error)
}
type TestInterface interface {
	Test() int
}

// type SortAble []CompareAble

// type SortFunc = func(a []CompareAble) []CompareAble

// func (s *SortAble) exchange(a *CompareAble, b *CompareAble) {
// 	if (*a).Compare(*b) > 0 {
// 		a, b = b, a
// 	}
// }

// func (s *[]CompareAble) sort(sortFunc SortFunc) []CompareAble {
// 	return sortFunc((*s)[0:])
// }
