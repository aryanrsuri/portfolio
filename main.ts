import { Hono, HonoRequest } from "https://deno.land/x/hono@v4.3.11/mod.ts";
import { serveStatic } from "https://deno.land/x/hono@v4.3.11/middleware.ts";
// import * as hono from "https://deno.land/x/hono@v4.3.11/adapter/deno/serve-static.ts";
// const index = await Deno.readFile("index.html");
// const math = await Deno.readFile("math.html");
// const dangers = await Deno.readFile("./articles/dangers.html")
// const bolognese = await Deno.readFile("./articles/bolognese.xhtml")
// const dalies13052024= await Deno.readFile("./articles/dailies13052024.xhtml")
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
