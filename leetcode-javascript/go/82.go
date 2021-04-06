package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
	dumy := &ListNode{
		0,
		head,
	}
	cur := dumy
	for cur.Next != nil && cur.Next.Next != nil {
		if cur.Next.Val == cur.Next.Next.Val {
			x := cur.Next.Val
			for cur.Next != nil && cur.Next.Val == x {
				cur.Next = cur.Next.Next
			}
		} else {
			cur = cur.Next
		}
	}
	return dumy.Next
}

func main() {
	t := ListNode{
		1,
		&ListNode{
			1,
			&ListNode{
				2,
				nil,
			},
		},
	}
	fmt.Printf("%v", deleteDuplicates(&t))
}
