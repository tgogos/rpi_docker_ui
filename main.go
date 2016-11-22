package main

import (
	_ "docker-ui/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}

