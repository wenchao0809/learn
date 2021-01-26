package main

import "fmt"

func main() {
	ch := make(chan int, 1)
	ch2 := make(chan int)

	go func() {
		for i := 0; i < 10; i++ {
			select {
			case ch <- i:
			case x := <-ch:
				fmt.Println(x) // "0" "2" "4" "6" "8"
			}
			if i == 8 {
				ch2 <- 0
			}
		}
	}()

	// go func() {
	// 	x := <-ch
	// 	fmt.Println(x)
	// 	ch2 <- 0
	// }()
	<-ch2
	// naturals := make(chan int)
	// squares := make(chan int)
	// // Counter
	// go func() {
	// 	for x := 0; ; x++ {
	// 		naturals <- x
	// 		time.Sleep(time.Duration(2) * time.Second)
	// 	}
	// }()
	// // Squarer
	// go func() {
	// 	for {
	// 		x := <-naturals
	// 		fmt.Println(x)
	// 		squares <- x * x
	// 	}
	// }()
	// // Printer (in main goroutine)
	// for {
	// 	fmt.Println(<-squares)
	// }
}
