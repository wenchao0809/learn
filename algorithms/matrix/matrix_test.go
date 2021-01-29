package matrix_test

import (
	"fmt"
	"testing"

	"github.com/ET912/learn/algorithm/matrix"
)

func TestMul(t *testing.T) {
	matrixA := matrix.MaTrix{
		{1, 2},
		{3, 4},
	}
	a := matrixA[0:]
	b := matrixA[0:]
	fmt.Printf("%v", matrix.Mul(a, b))
}
