package main

import "fmt"

func buildNext(p string) []int {
	l := len(p)
	N := []int{-1}
	j := 0
	t := -1
	for j < l-1 {
		if 0 > t || p[j] == p[t] {
			t++
			j++
			fmt.Printf("t = %d", t)
			if p[j] != p[t] {
				N = append(N, t)
			} else {
				N = append(N, N[t])
			}
		} else {
			t = N[t]
		}
	}
	return N
}

func Match(t string, p string) int {
	N := buildNext(p)
	var i int
	var j int
	n, m := len(t), len(p)
	for j < m && i < n {
		if 0 > j || t[i] == p[j] {
			i++
			j++
		} else {
			j = N[j]
		}
	}
	if j == m {
		return i - j
	} else {
		return -1
	}
}

func main() {
	fmt.Println(Match("Ac", "c"))
}
