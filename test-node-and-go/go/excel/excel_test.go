package excel

import "testing"

func TestGetColumnByIndex(t *testing.T) {
	if GetColumnByIndex(1) != "A" {
		t.Errorf("GetColumnByIndex(1)=%s", GetColumnByIndex(1))
	}
	// if GetColumnByIndex(702) != "ZZ" {
	// 	t.Errorf("GetColumnByIndex(1)=%s", GetColumnByIndex(702))
	// }
}
