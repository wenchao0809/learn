package main

import "fmt"

type TreeNode struct {
	val   int
	left  *TreeNode
	right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	queue := []*TreeNode{root, root}
	for len(queue) > 0 {
		left, right := queue[0], queue[1]
		if left == nil && right == nil {
			continue
		}
		if left == nil || right == nil || left.val != right.val {
			return false
		}
		queue = append(queue, left.left, right.right)
		queue = append(queue, left.right, right.right)
		queue = queue[2:]
	}
	return true
}

func main() {
	node := TreeNode{1, &TreeNode{2, nil, nil}, &TreeNode{3, nil, nil}}
	fmt.Println(isSymmetric(&node))
}
