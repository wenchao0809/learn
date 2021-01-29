package excel

// GetColumnByIndex 根据index计算excel数据列
func GetColumnByIndex(index int) string {
	alphabet := []string{"", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"}
	if index <= 26 {
		return alphabet[index]
	}
	cur := index % 26
	return GetColumnByIndex((index-cur)%26) + GetColumnByIndex(cur)
}
