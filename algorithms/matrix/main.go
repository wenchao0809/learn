package main

import (
	"log"
	"math/rand"
	"time"
)

const (
	SIZE = 1024 // POWER OF TWO
	RAND = 100
)

func timeTrack(start time.Time, name string) {
	elapsed := time.Since(start)
	log.Printf("%s took %s", name, elapsed)
}

func createArrays() ([SIZE][SIZE]int, [SIZE][SIZE]int) {
	defer timeTrack(time.Now(), "generation")
	var A [SIZE][SIZE]int
	var B [SIZE][SIZE]int
	for i := 0; i < SIZE; i++ {
		for j := 0; j < SIZE; j++ {
			A[i][j] = ran.Intn(RAND)
			B[i][j] = ran.Intn(RAND)
		}
	}
	return A, B
}

func multiply(A [SIZE][SIZE]int, B [SIZE][SIZE]int) [SIZE][SIZE]int {
	defer timeTrack(time.Now(), "n^3 multiply")
	var n [SIZE][SIZE]int

	for i := 0; i < SIZE; i++ {
		for j := 0; j < SIZE; j++ {
			sum := 0
			for k := 0; k < SIZE; k++ {
				sum += A[i][k] * B[k][j]
			}
			n[i][j] = sum
		}
	}
	return n
}

func multiply2(A [SIZE / 2][SIZE / 2]int, B [SIZE / 2][SIZE / 2]int) [SIZE / 2][SIZE / 2]int {
	var n [SIZE / 2][SIZE / 2]int

	for i := 0; i < SIZE/2; i++ {
		for j := 0; j < SIZE/2; j++ {
			sum := 0
			for k := 0; k < SIZE/2; k++ {
				sum += A[i][k] * B[k][j]
			}
			n[i][j] = sum
		}
	}
	return n
}

func add(A [SIZE / 2][SIZE / 2]int, B [SIZE / 2][SIZE / 2]int) [SIZE / 2][SIZE / 2]int {
	var n [SIZE / 2][SIZE / 2]int

	for i := 0; i < SIZE/2; i++ {
		for j := 0; j < SIZE/2; j++ {
			n[i][j] += A[i][j] + B[i][j]
		}
	}
	return n
}

func sub(A [SIZE / 2][SIZE / 2]int, B [SIZE / 2][SIZE / 2]int) [SIZE / 2][SIZE / 2]int {
	var n [SIZE / 2][SIZE / 2]int

	for i := 0; i < SIZE/2; i++ {
		for j := 0; j < SIZE/2; j++ {
			n[i][j] += A[i][j] - B[i][j]
		}
	}
	return n
}

func divAndConq(A [SIZE][SIZE]int, B [SIZE][SIZE]int) [SIZE][SIZE]int {
	defer timeTrack(time.Now(), "divide and conquer")
	var n [SIZE][SIZE]int
	var A11 [SIZE / 2][SIZE / 2]int
	var A12 [SIZE / 2][SIZE / 2]int
	var A21 [SIZE / 2][SIZE / 2]int
	var A22 [SIZE / 2][SIZE / 2]int
	var B11 [SIZE / 2][SIZE / 2]int
	var B12 [SIZE / 2][SIZE / 2]int
	var B21 [SIZE / 2][SIZE / 2]int
	var B22 [SIZE / 2][SIZE / 2]int

	for i := 0; i < SIZE/2; i++ {
		for j := 0; j < SIZE/2; j++ {
			A11[i][j] = A[i][j]
			A12[i][j] = A[i][j+SIZE/2]
			A21[i][j] = A[i+SIZE/2][j]
			A22[i][j] = A[i+SIZE/2][j+SIZE/2]
			B11[i][j] = B[i][j]
			B12[i][j] = B[i][j+SIZE/2]
			B21[i][j] = B[i+SIZE/2][j]
			B22[i][j] = B[i+SIZE/2][j+SIZE/2]
		}
	}

	M1 := multiply2(add(A11, A22), add(B11, B22))
	M2 := multiply2(add(A21, A22), B11)
	M3 := multiply2(A11, sub(B12, B22))
	M4 := multiply2(A22, sub(B21, B11))
	M5 := multiply2(add(A11, A12), B22)
	M6 := multiply2(sub(A21, A11), add(B11, B12))
	M7 := multiply2(sub(A12, A22), add(B21, B22))

	for i := 0; i < SIZE/2; i++ {
		for j := 0; j < SIZE/2; j++ {
			n[i][j] = M1[i][j] + M4[i][j] - M5[i][j] + M7[i][j]
			n[i][j+SIZE/2] = M3[i][j] + M5[i][j]
			n[i+SIZE/2][j] = M2[i][j] + M4[i][j]
			n[i+SIZE/2][j+SIZE/2] = M1[i][j] - M2[i][j] + M3[i][j] + M6[i][j]
		}
	}

	return n
}

func checkEqual(A [SIZE][SIZE]int, B [SIZE][SIZE]int) bool {
	for i := 0; i < SIZE; i++ {
		for j := 0; j < SIZE; j++ {
			if A[i][j] != B[i][j] {
				return false
			}
		}
	}
	return true
}

var seed = rand.NewSource(time.Now().UnixNano())
var ran = rand.New(seed)

func main() {
	log.Printf("matrices are %vx%v, with values ranging from 0 to %v", SIZE, SIZE, RAND-1)
	A, B := createArrays()
	M := multiply(A, B)
	D := divAndConq(A, B)
	/*log.Println(A)
	log.Print(B)
	log.Print(M)
	log.Print(D)*/
	if checkEqual(M, D) {
		log.Print("matrices are the same")
	} else {
		log.Print("matrices are different")
	}
}
