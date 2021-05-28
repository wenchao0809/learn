package main

import "fmt"

func longestPalindrome(s string) string {
	n := len(s)
	res := ""
	for i := 0; i < n; i++ {
		l, r := i, i
		for l >= 0 && r < n {
			if l > 0 && r < n-1 && s[l-1] == s[r+1] {
				l--
				r++
			} else if r < n-1 && s[r+1] == s[i] && l == i {
				r++
			} else {
				break
			}
		}
		if r-l+1 > len(res) {
			res = s[l : r+1]
		}
	}
	return res
}

func main() {
	fmt.Println(longestPalindrome("aacabdkacaa"))
}
