package routers

import (
	"rpi_docker_ui/controllers"
	"github.com/astaxie/beego"
)

func init() {
    beego.Router("/", &controllers.ImagesController{})
		beego.Router("/home", &controllers.ImagesController{})
		beego.Router("/images", &controllers.ImagesController{})
		beego.Router("/image_details/?:id", &controllers.ImageDetailsController{})
		// beego.Router("/api/images", &controllers.ApiImagesController{}) replaced by the nginx reverse proxy

		beego.Router("/containers", &controllers.ContainersController{})
		beego.Router("/container_details/?:id", &controllers.ContainerDetailsController{})
		beego.Router("/run", &controllers.RunController{})
}
