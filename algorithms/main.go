package main

import (
	"errors"
	"fmt"

	"github.com/ET912/learn/algorithm/gosort"
)

// CompareInt -
type CompareInt struct {
	Value int
}

// Compare -
func (a CompareInt) Compare(b gosort.CompareAble) (int, error) {
	c, ok := b.(CompareInt)
	if !ok {
		return 0, errors.New("un support type")
	}
	return a.Value - c.Value, nil
}

func main() {
	x := make([]gosort.CompareAble, 5)
	y := []CompareInt{
		{Value: 2},
		{Value: 4},
		{Value: 2},
		{Value: 7},
		{Value: 9},
	}
	for i, c := range y {
		x[i] = c
	}
	z := gosort.MergeSort(x)
	fmt.Printf("%v", z)
}
