package controllers

import (
	"github.com/astaxie/beego"
)

type ImagesController struct {
	beego.Controller
}

func (c *ImagesController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "images.html"
}
