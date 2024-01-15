import { Hono } from 'https://deno.land/x/hono@v3.12.3/mod.ts'
const index = await Deno.readFile("index.html")
const app = new Hono()
app
	.get('/', async (c) => 
	     c.text(index))
 Deno.serve(app.fetch)
