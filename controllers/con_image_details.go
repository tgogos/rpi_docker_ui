package controllers

import (
	"github.com/astaxie/beego"
)

type ImageDetailsController struct {
	beego.Controller
}

func (c *ImageDetailsController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "image_details.html"
}
