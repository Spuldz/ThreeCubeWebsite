package config

import (
	"github.com/joho/godotenv"
)

var Environment string
var HostPath string
var AssetsPath string
var Port string

func SetupEnv() {
	var envs map[string]string

	envs, err := godotenv.Read(".env")
	if err != nil {
		panic(err)
	}

	Port = envs["Port"]

	Environment = envs["Environment"]

	if Environment == "dev2" || Environment == "dev" {
		HostPath = "localhost:" + Port + "/"
	} else {
		HostPath = "www.threecube.lv/"
	}
	AssetsPath = HostPath + "assets/"
}
