import { createHonoApp, createHonoHandlers } from "@/lib/hono-handler";
import { supabase } from "@/lib/supabase";

const app = createHonoApp("/api/portfolio");

app.get("/", async (c) => {
  try {
    const { data, error } = await supabase.from("portfolio").select("*");
    if (error) throw error;
    return c.json({
      success: true,
      data,
    });
  } catch (error: any) {
    return c.json(
      {
        success: false,
        error: error.message,
      },
      500
    );
  }
});

// Export all handlers
const handlers = createHonoHandlers(app);
export const GET = handlers.GET;
export const POST = handlers.POST;
export const PUT = handlers.PUT;
export const DELETE = handlers.DELETE;
export const PATCH = handlers.PATCH;
export const HEAD = handlers.HEAD;
export const OPTIONS = handlers.OPTIONS;