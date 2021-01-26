package main

import (
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"sync"
)

var (
	client = http.Client{}
)

func main() {
	pool := make(chan int, 1000)
	pool <- 2
	// wg := &sync.WaitGroup{}
	// for i := 0; i < 100000; i++ {
	// 	wg.Add(1)
	// 	go work(pool, wg)
	// 	//time.Sleep(time.Second * 1)
	// 	pool <- i
	// 	//fmt.Println(i)
	// }
	// wg.Wait()
}

func work(pool <-chan int, wg *sync.WaitGroup) {
	req, err := http.NewRequest("GET", "http://localhost:9001/obs-get/uploadImage-pc/202008071032fd9.jpg", nil)
	if err != nil {
		<-pool
		wg.Done()
		fmt.Println(err)
		return
	}
	rsp, err := client.Do(req)
	if err != nil {
		<-pool
		wg.Done()
		fmt.Println(err)
		return
	}
	io.Copy(ioutil.Discard, rsp.Body)
	rsp.Body.Close()
	fmt.Println(<-pool)
	wg.Done()
}

//https://csbg-test.xgeeklab.com/api/admin/news/list
func work2(pool <-chan int, wg *sync.WaitGroup) {
	req, err := http.NewRequest("POST", "https://csbg-test.xgeeklab.com/api/admin/news/list", nil)
	if err != nil {
		<-pool
		wg.Done()
		fmt.Println(err)
		return
	}
	req.Header.Set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcl9uYW1lIjoibGllcmdvdSIsInVuaXQiOjEsIm5hbWUiOiLmnY7kuozni5ciLCJsZXZlbCI6MiwiaWF0IjoxNjA3NTAwMjQwLCJleHAiOjE2MDc1ODY2NDB9.kAy6tQbOtAoDZQbwWPE8THjR4s_X7StomouBF9Fn6vA")
	req.Header.Set("Cookie", "CHANGSHA-LOGIN-TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcl9uYW1lIjoibGllcmdvdSIsInVuaXQiOjEsIm5hbWUiOiLmnY7kuozni5ciLCJsZXZlbCI6MiwiaWF0IjoxNjA3NTAwMjQwLCJleHAiOjE2MDc1ODY2NDB9.kAy6tQbOtAoDZQbwWPE8THjR4s_X7StomouBF9Fn6vA; userName=liergou; level=2; userId=5; unit=1; richTextLengthChangsha=0")
	rsp, err := client.Do(req)
	if err != nil {
		<-pool
		wg.Done()
		fmt.Println(err)
		return
	}

	//io.Copy(ioutil.Discard, rsp.Body)
	result, err := ioutil.ReadAll(rsp.Body)
	if err != nil {
		fmt.Println(err.Error())
		return
	}
	fmt.Println(string(result))
	rsp.Body.Close()
	<-pool
	wg.Done()
}
