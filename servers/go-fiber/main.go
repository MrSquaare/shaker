package main

import (
	"log"
	"math/rand/v2"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New())

	app.Get("/", func(c *fiber.Ctx) error {
		// Sleep between 250ms and 500ms
		time.Sleep(time.Duration(rand.IntN(250)+250) * time.Millisecond)

		return c.SendString("Hello, World!")
	})

	log.Fatal(app.Listen(":4000"))
}
