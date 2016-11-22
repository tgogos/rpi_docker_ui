package controllers

import (
	"github.com/astaxie/beego"
	"net/http"
	"bytes"
	"io/ioutil"
)

type ApiImagesController struct {
	beego.Controller
}

func (c *ApiImagesController) Get() {
	url := "http://10.143.0.218:4243/images/json"



	var query = []byte(`your query`)
	req, err := http.NewRequest("GET", url, bytes.NewBuffer(query))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	// fmt.Println("response Status:", resp.Status)
	// fmt.Println("response Headers:", resp.Header)
	body, _ := ioutil.ReadAll(resp.Body)
	// fmt.Println("response Body:", string(body))

	c.Ctx.WriteString(string(body))
}
