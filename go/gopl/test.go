package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Flags uint

func main() {
	const (
		FlagUp           Flags = 1 << iota // is up
		FlagBroadcast                      // supports broadcast access capability
		FlagLoopback                       // is a loopback interface
		FlagPointToPoint                   // belongs to a point-to-point link
		FlagMulticast                      // supports multicast access capability
	)

	s := "abc定"
	b := []byte(s)
	s2 := string(b)
	fmt.Println(b)
	fmt.Println(s2)
	b0 := strings.Contains(s2, "jj")
	b1, b2 := strconv.FormatBool(b0), fmt.Sprintf("%t", b0)
	fmt.Printf("%s %s", b1, b2)
	var (
		a string
		c string
	)
	fmt.Printf("%s %s", a, c)
	fmt.Printf("%d %d", FlagUp, FlagLoopback)

	var f float64 = 212
	fmt.Println((f - 32) * 5 / 9) // "100"; (f - 32) * 5 is a float64
	fmt.Println(5 / 9)            // "0"; 5/9 is an untyped integer, 0
	fmt.Println(5.0 / 9.0 * (f - 32))
}
