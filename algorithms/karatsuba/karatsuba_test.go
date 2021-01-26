package karatsuba_test

import (
	"testing"

	"github.com/ET912/learn/algorithm/karatsuba"
)

type Input struct {
	a int
	b int
}

var tests = []struct {
	a    int
	b    int
	want bool
}{
	{12133, 324242, true},
}

func TestKaratsuba(t *testing.T) {
	for _, test := range tests {
		if karatsuba.Karatsuba(test.a, test.b) != 232 {
			t.Errorf("%d %d\n", test.a, test.b)
		}
	}
}
