package controllers

import (
	"github.com/astaxie/beego"
)

type ContainerDetailsController struct {
	beego.Controller
}

func (c *ContainerDetailsController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "container_details.html"
}
