import { Hono, HonoRequest } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v4.3.11/middleware.ts";
const app = new Hono();
app
  .use("/*", serveStatic({ root: "./src" }))
  .get(
    "/:any",
    (c: HonoRequest) =>
      c.html(
        `<p style="font-family: 'Lucida Console', monospace;">go back to <a href="/">/</a> please</p>`,
      ),
  );
Deno.serve(app.fetch);
