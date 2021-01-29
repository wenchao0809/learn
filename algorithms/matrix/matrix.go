package matrix

// MaTrix 矩阵
type MaTrix [][]int

//Mul 矩阵乘法
func Mul(a MaTrix, b MaTrix) MaTrix {
	m := len(a)
	n := len(b)
	if n != len(a[0]) {
		return [][]int{}
	}
	p := len(b[0])
	// 创建一个二维数组 非要这么麻烦吗。。。
	r := make([][]int, m)
	for i := 0; i < len(r); i++ {
		r[i] = make([]int, p)
	}
	for i := 0; i < m; i++ {
		col := a[i]
		for j := 0; j < p; j++ {
			row := b[j]
			for k := 0; k < n; k++ {
				r[i][j] += col[k] * row[k]
			}
		}
	}
	return r
}
