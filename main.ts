import { Hono } from "https://deno.land/x/hono@v3.12.3/mod.ts";
const index = await Deno.readFile("index.html");
const app = new Hono();
app
  .get("/", (c) => c.text(index))
  .get(
    "/:any",
    (c) =>
      c.html(
        `<p style="font-family: 'Lucida Console', monospace;">go back to <a href="/">/</a> please</p>`,
      ),
  );
Deno.serve(app.fetch);
