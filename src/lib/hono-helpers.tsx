import { basicAuth } from "hono/basic-auth";
export const username = process.env.NEXT_PUBLIC_USERNAME!;
export const password = process.env.NEXT_PUBLIC_PASSWORD!;

export const basicHonoAuth = basicAuth({
  username,
  password,
});

// export const credentials = btoa(
//   `${username}:${password}`
// );
