import { Hono } from "https://deno.land/x/hono@v3.12.3/mod.ts";
const index = await Deno.readFile("index.html");
const math = await Deno.readFile("math.html");
const dangers = await Deno.readFile("./articles/dangers.html")
const bolognese = await Deno.readFile("./articles/bolognese.xhtml")
const dalies13052024= await Deno.readFile("./articles/dailies13052024.xhtml")
const app = new Hono();
app
  .get("/", (c) => c.text(index))
  .get("/index.html", (c) => c.text(index))
  .get("/math.html", (c) => c.text(math))
  .get("/dangers.html", (c) => c.text(dangers))
  .get("/dailies13052024.html", (c) => c.text(dalies13052024))
  .get("/recipes/bolognese.html", (c) => c.text(bolognese))
  .get(
    "/:any",
    (c) =>
      c.html(
        `<p style="font-family: 'Lucida Console', monospace;">go back to <a href="/">/</a> please</p>`,
      ),
  );
Deno.serve(app.fetch);
