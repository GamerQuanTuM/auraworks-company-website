import { createHonoApp, createHonoHandlers } from "@/lib/hono-handler";
import { z } from "zod";
import { zodValidate } from "@/lib/hono-zod-helper";

// Create Zod schemas for validation
const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  price: z.number().positive("Price must be positive"),
  description: z.string().optional(),
  category: z.enum(["electronics", "clothing", "food", "other"]),
  inStock: z.boolean().default(true),
});

// Schema for query parameters
const productQuerySchema = z.object({
  limit: z.string().regex(/^\d+$/).transform(Number).optional(),
  category: z.string().optional(),
  sortBy: z.enum(["price", "name", "newest"]).optional(),
});

// Schema for URL parameters
const productParamsSchema = z.object({
  id: z.string().regex(/^\d+$/, "ID must be a number"),
});

// Create a Hono app for product routes
const app = createHonoApp("/api/products");

// Get all products with optional query filtering
app.get(
  "/",
  zodValidate({
    parameter: "query",
    schema: productQuerySchema,
    httpStatusCode: 400,
  }),
  (c) => {
    // Access validated query params
    const query = c.req.valid("query");
    const limit = query.limit || 10;
    const category = query.category;
    const sortBy = query.sortBy || "newest";

    console.log("Query params:", { limit, category, sortBy });

    return c.json({
      products: ["Product 1", "Product 2"],
      meta: { limit, category, sortBy },
    });
  }
);

// Get product by ID with param validation
app.get(
  "/:id",
  zodValidate({
    parameter: "param",
    schema: productParamsSchema,
    httpStatusCode: 400,
  }),
  (c) => {
    const { id } = c.req.valid("param");
    return c.json({ product: { id, name: `Product ${id}` } });
  }
);

app.post(
  "/",
  zodValidate({
    parameter: "json",
    schema: productSchema,
    httpStatusCode: 400,
  }),
  async (c) => {
    const product = c.req.valid("json");
    return c.json(
      {
        message: "Product created successfully",
        product,
      },
      201
    );
  }
);

// Export all handlers
const handlers = createHonoHandlers(app);
export const GET = handlers.GET;
export const POST = handlers.POST;
export const PUT = handlers.PUT;
export const DELETE = handlers.DELETE;
export const PATCH = handlers.PATCH;
export const HEAD = handlers.HEAD;
export const OPTIONS = handlers.OPTIONS;
