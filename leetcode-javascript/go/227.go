package main

import (
	"fmt"
	"strings"
)

func isValidSerialization(preorder string) bool {
	c := 1
	s := strings.Split(preorder, ",")
	for i, str := range s {
		if str != "#" {
			c++
		} else {
			c--
		}
		if c < 0 || (c == 0 && i < len(s)-1) {
			return false
		}
	}
	return c == 0
}

func main() {
	fmt.Printf("#-->%t\n", isValidSerialization("#"))
	fmt.Printf("9,3,4,#,#,1,#,#,2,#,6,#,#-->%t\n", isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"))
	fmt.Printf("1,#-->%t\n", isValidSerialization("1,#"))
	fmt.Printf("#,7,6,9,#,#,#-->%t\n", isValidSerialization("#,7,6,9,#,#,#"))
	fmt.Printf("1,#,#,#,#-->%t\n", isValidSerialization("1,#,#,#,#"))
}
