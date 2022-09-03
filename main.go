package main

import (
	"github.com/WinterWolfie/ThreeCubeWebsite/src/config"
	"github.com/gin-gonic/gin"
)

func main() {
	config.SetupEnv()

	router := gin.Default()
	router.Static("/assets", "./front/assets")

	router.LoadHTMLGlob("./front/**/*.html")

	config.CreateRoutes(router)

	err := router.Run()
	if err != nil {
		return
	}
}
