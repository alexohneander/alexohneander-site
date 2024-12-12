package main

import (
    "log"

    "github.com/pocketbase/pocketbase"
    "github.com/pocketbase/pocketbase/core"
)

func main() {
    app := pocketbase.New()

    app.OnServe().BindFunc(func(se *core.ServeEvent) error {
        // registers new "GET /hello" route
        se.Router.GET("/hello", func(re *core.RequestEvent) error {
            return re.String(200, "Hello world!")
        })

        se.Router.GET("/version", func(re *core.RequestEvent) error {
            return re.JSON(200, "{ 'status': 'ok', 'version': 'v0.1.0' }" )
        })

        return se.Next()
    })

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
