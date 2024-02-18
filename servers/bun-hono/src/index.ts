import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.get("/", async (c) => {
  // Sleep between 250ms and 500ms
  const sleep = Math.floor(Math.random() * 250) + 250;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(c.text("Hello, World!"));
    }, sleep);
  });

  return c.text("Hello, World!");
});

export default app;
