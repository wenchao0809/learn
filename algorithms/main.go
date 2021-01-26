package main

import (
	"fmt"

	"github.com/ET912/learn/algorithm/gosort"
)

// CompareInt -
type CompareInt struct {
	Value int
}

// Compare -
func (a CompareInt) Compare(b interface{}) int {
	var c gosort.CompareAble
	c = b
	if b.(CompareInt) {
		return a.Value - b.Value

	}
	return a.Value
}

type Compare struct {
	Value int
}

// Compare -
func (a Compare) Compare() int {
	return a.Value
}

// func (a CompareInt) Test() int {
// 	return 1
// }

func main() {
	// var w io.Writer
	// w = os.Stdout
	// f := w.(*os.File)
	// success: f == os.Stdout
	// c := w.(*bytes.Buffer)
	var x gosort.CompareAble
	x = CompareInt{1}
	// gosort.MergeSort(x)
	f := x.(Compare)
	fmt.Printf("%v", f)
}
