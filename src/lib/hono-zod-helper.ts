import { ZodTypeAny } from "zod";
import { zValidator } from "@hono/zod-validator";
import { ContentfulStatusCode } from "hono/utils/http-status";

const reqParameters = [
  "query",
  "param",
  "json",
  "form",
  "header",
  "cookie",
] as const;
type ReqParameters = (typeof reqParameters)[number];

export const zodValidate = <T extends ZodTypeAny>({
  parameter,
  schema,
  httpStatusCode,
}: {
  parameter: ReqParameters;
  schema: T;
  httpStatusCode?: ContentfulStatusCode;
}) => {
  return zValidator(parameter, schema, (result, c) => {
    if (!result.success) {
      return c.json(
        {
          error: "Invalid Parameters",
          details: result.error.format(),
        },
        httpStatusCode || 400
      );
    }
  });
};
