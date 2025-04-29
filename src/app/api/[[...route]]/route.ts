import { Hono } from "hono"
import { handle } from "hono/vercel"
import type { PageConfig } from "next"


export const runtime = "nodejs"

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}

export const app = new Hono().basePath("/api")


// You can still define simple routes directly here
app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  })
})
app.get("/:id", (c) => {
  const id = c.req.param("id")
  return c.json({
    message: "Hello from Hono!",
    id,
  })
})

export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const DELETE = handle(app)
export const PATCH = handle(app)
export const HEAD = handle(app)
export const OPTIONS = handle(app)
