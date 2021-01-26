package karatsuba_test

import (
	"testing"

	"github.com/ET912/learn/algorithms/karatsuba"
)

type Input struct {
	a int64
	b int64
}

var tests = []struct {
	a    int64
	b    int64
	want bool
}{
	{12133, 324242, true},
}

func TestKaratsuba(t *testing.T) {
	for _, test := range tests {
		karatsuba.Karatsuba(test.a, test.b)
	}
}
