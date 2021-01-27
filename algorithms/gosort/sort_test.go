package gosort_test

import (
	"fmt"
	"testing"

	"github.com/ET912/learn/algorithm/compare"
	"github.com/ET912/learn/algorithm/gosort"
)

func TestMergeSort(t *testing.T) {
	y := []compare.Int{
		{Value: 7},
		{Value: 6},
		{Value: 5},
		{Value: 4},
		{Value: 3},
		{Value: 2},
		{Value: 1},
	}
	x := make(gosort.SortAble, len(y))
	for i, c := range y {
		x[i] = c
	}
	z := x.Sort(gosort.MergeSort)
	fmt.Printf("%v", z)
	if res, _ := z[1].Compare(compare.Int{Value: 2}); res != 0 {
		t.Errorf("sort %v=\n%v", x, z)
	}
}
