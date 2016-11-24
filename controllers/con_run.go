package controllers

import (
	"github.com/astaxie/beego"
)

type RunController struct {
	beego.Controller
}

func (c *RunController) Get() {
	c.Data["Website"] = "beego.me"
	c.Data["Email"] = "astaxie@gmail.com"
	c.TplName = "run.html"
}
