package config

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreateRoutes(router *gin.Engine) {
	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"HostPath":   HostPath,
			"AssetsPath": AssetsPath,
		})
	})

	router.GET("/c-app", func(c *gin.Context) {
		c.HTML(http.StatusOK, "c_app.html", gin.H{})
	})

	router.GET("/ok", func(c *gin.Context) {
		c.HTML(http.StatusOK, "c_app.html", gin.H{})
	})

}

/*func applyBasicValues(c *gin.Context, file string) {
	c.HTML(http.StatusOK, file, gin.H{
		"HostPath":   HostPath,
		"AssetsPath": AssetsPath,
	})
}*/
