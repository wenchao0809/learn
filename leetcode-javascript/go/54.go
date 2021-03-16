package main

import "fmt"

func spiralOrder(matrix [][]int) []int {
	m := len(matrix)
	n := len(matrix[0])

	res := make([]int, m*n)
	var in int
	// u 上边界 l 左边界， d 下边界 r 右边界
	u, l := 0, 0
	d, r := m-1, n-1
	for {
		for i := l; i <= r; i++ { //  上边界遍历
			res[in] = matrix[u][i]
			in++
		}
		u++
		if u > d {
			break
		}

		for i := u; i <= d; i++ { //  右边界遍历
			res[in] = matrix[i][r]
			in++
		}
		r--
		if l > r {
			break
		}

		for i := r; i >= l; i-- { //  下边界遍历
			res[in] = matrix[d][i]
			in++
		}
		d--
		if u > d {
			break
		}

		for i := d; i >= u; i-- { //  右边界遍历
			res[in] = matrix[i][l]
			in++
		}
		l++
		if l > r {
			break
		}

	}

	return res
}

func main() {
	values := [][]int{}

	// Step 2: 使用 appped() 函数向空的二维数组添加两行一维数组
	row1 := []int{2, 5, 8}
	row2 := []int{4, 0, -1}
	values = append(values, row1)
	values = append(values, row2)
	fmt.Printf("#-->%v\n", spiralOrder(values))
}
