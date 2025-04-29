import { Hono } from "hono";
import { handle } from "hono/vercel";
import type { NextRequest } from "next/server";

// Helper function to create a Hono app with standard configuration
export function createHonoApp(basePath: string) {
  return new Hono().basePath(basePath);
}

// Helper function to create standard exports for a route file
export function createHonoHandlers(app: Hono) {
  const honoHandler = handle(app);
  
  // Create type-compatible handler functions for Next.js App Router
  const nextHandler = (req: NextRequest) => honoHandler(req);
  
  return {
    GET: nextHandler,
    POST: nextHandler,
    PUT: nextHandler,
    DELETE: nextHandler,
    PATCH: nextHandler,
    HEAD: nextHandler,
    OPTIONS: nextHandler
  };
}
