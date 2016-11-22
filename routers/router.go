package routers

import (
	"docker-ui/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.MainController{})
		beego.Router("/home", &controllers.HomeController{})
		beego.Router("/images", &controllers.ImagesController{})
		beego.Router("/image_details/?:id", &controllers.ImageDetailsController{})
		// beego.Router("/api/images", &controllers.ApiImagesController{}) replaced by the nginx reverse proxy

		beego.Router("/containers", &controllers.ContainersController{})
}
