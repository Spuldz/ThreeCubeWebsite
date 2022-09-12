package main

import (
	"github.com/WinterWolfie/ThreeCubeWebsite/config"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	config.SetupEnv()

	setupRouter()

}

func setupRouter() {

	router := gin.Default()

	//allows debugging from a different domain
	if config.Environment != "production" {
		router.Use(cors.New(cors.Config{
			AllowOrigins:     []string{"http://localhost:3001", "http://localhost:3000"},
			AllowMethods:     []string{"GET", "POST", "OPTIONS"},
			AllowCredentials: true,
		}))
	}

	//acts as file server when in production
	if config.Environment == "production" {
		router.Static("/static/", "./frontend/static")
		router.LoadHTMLGlob("./frontend/*.html")

		config.CreateStaticRoutes(router)
	}

	config.CreateDataRoutes(router)

	err := router.Run(":" + config.Port)
	if err != nil {
		return
	}

}
