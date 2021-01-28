package gosort_test

import (
	"math/rand"
	"sync"
	"testing"

	"github.com/ET912/learn/algorithm/compare"
	"github.com/ET912/learn/algorithm/gosort"
)

type Test struct {
	input      gosort.SortAble
	want       gosort.SortAble
	sorted     gosort.SortAble
	reverCount int
}

type Tests []Test

// 随机生成测试用例
func makeTests() Tests {
	// 100 - 10000随机数
	l := 1000
	var r = make(Tests, l)
	for i := 0; i < l; i++ {
		il := 1000
		var input = make(gosort.SortAble, il)
		var want = make(gosort.SortAble, il)
		for j := 0; j < il; j++ {
			value := rand.Intn(1000)
			c := compare.Int{Value: value}
			input[j] = c
			// 做一下插入排序
			want[j] = c
			for k := j - 1; k >= 0; k-- {
				if cr, _ := want[k].Compare(c); cr < 0 {
					want[k], want[k+1] = want[k+1], want[k]
				}
			}
		}
		r[i].input = input
		r[i].want = want
		r[i].reverCount = gosort.CountReversePair(input)
	}
	return r
}
func compareC(input gosort.SortAble, want gosort.SortAble) bool {
	b := true
	for i, c := range input {
		if cr, _ := c.Compare(want[i]); cr != 0 {
			b = false
			break
		}
	}
	return b
}
func TestMergeSort(t *testing.T) {
	tests := makeTests()
	ch := make(chan Test)
	// 限制下并发
	chc := make(chan int, 1000)
	var n sync.WaitGroup
	for _, a := range tests {
		n.Add(1)
		go func(a Test) {
			z := a.input.Sort(gosort.MergeSort)
			a.sorted = z
			ch <- a
			n.Done()
			<-chc
		}(a)
		chc <- 1
	}
	go func() {
		n.Wait()
		close(ch)
		close(chc)
	}()
	for test := range ch {
		if compareC(test.want, test.sorted) != true {
			t.Errorf("input=%v\nwant=%v\nsorted=%v\n", test.input, test.want, test.sorted)
		}
	}
	// for _, a := range tests {
	// 	a.input.Sort(gosort.MergeSort)
	// }
}
