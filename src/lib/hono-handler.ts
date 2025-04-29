import { Hono } from "hono"
import { handle } from "hono/vercel"
import type { PageConfig } from "next"

// Helper function to create a Hono app with standard configuration
export function createHonoApp(basePath: string) {
  return new Hono().basePath(basePath)
}

// Helper function to create standard exports for a route file
export function createHonoHandlers(app: Hono) {
  return {
    GET: handle(app),
    POST: handle(app),
    PUT: handle(app),
    DELETE: handle(app),
    PATCH: handle(app),
    HEAD: handle(app),
    OPTIONS: handle(app),
    config: {
      api: {
        bodyParser: false,
      },
    } as PageConfig,
    runtime: "nodejs" as const,
  }
}
