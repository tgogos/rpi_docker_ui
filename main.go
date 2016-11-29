package main

import (
	_ "rpi_docker_ui/routers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Run()
}
