package controllers

import (
	"github.com/astaxie/beego"
)

type ContainersController struct {
	beego.Controller
}

func (c *ContainersController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "containers.html"
}
