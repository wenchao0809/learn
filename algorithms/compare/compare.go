package compare

import (
	"errors"

	"github.com/ET912/learn/algorithm/gosort"
)

// Int -
type Int struct {
	Value int
}

// Compare -
func (a Int) Compare(b gosort.CompareAble) (int, error) {
	c, ok := b.(Int)
	if !ok {
		return 0, errors.New("un support type")
	}
	return c.Value - a.Value, nil
}
