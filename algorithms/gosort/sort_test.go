package gosort_test

import (
	"fmt"
	"testing"

	"github.com/ET912/learn/algorithm/compare"
	"github.com/ET912/learn/algorithm/gosort"
)

func TestMergeSort(t *testing.T) {
	y := []compare.Int{
		{Value: 2},
		{Value: 4},
		{Value: 2},
		{Value: 7},
		{Value: 9},
	}
	x := make(gosort.SortAble, len(y))
	for i, c := range y {
		x[i] = c
	}
	z := x.Sort(gosort.MergeSort)
	fmt.Printf("%v", z)
	if res, _ := z[1].Compare(compare.Int{Value: 1}); res != 0 {
		t.Errorf("sort %v=\n%v", x, z)
	}
}
