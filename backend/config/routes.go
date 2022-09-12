package config

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreateStaticRoutes(router *gin.Engine) {
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})

	router.GET("/c-app", func(c *gin.Context) {
		c.HTML(http.StatusOK, "c_app.html", gin.H{})
	})
}

func CreateDataRoutes(router *gin.Engine) {
	path := "/api/"

	router.GET(path+"test", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "veru good"})
	})
	router.GET(path+"test2", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "yeaaa boyyy"})
	})

}
