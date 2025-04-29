import { createHonoApp, createHonoHandlers } from "@/lib/hono-handler"

const app = createHonoApp("/api")

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

const handlers = createHonoHandlers(app);
export const GET = handlers.GET
export const POST = handlers.POST
export const PUT = handlers.PUT
export const DELETE = handlers.DELETE
export const PATCH = handlers.PATCH
export const HEAD = handlers.HEAD
export const OPTIONS = handlers.OPTIONS

