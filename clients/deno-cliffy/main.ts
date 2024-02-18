import { colors, Command, Kia, Table } from "./deps.ts";
import { FIBER_BASE_URL, HONO_BASE_URL } from "./constants/servers.ts";

const fetchData = async (url: string) => {
  try {
    const res = await fetch(url);

    return await res.text();
  } catch {
    return "Error";
  }
};

const isError = (value: string) => value === "Error";

const getStatus = (
  isError: boolean,
) => {
  return (isError ? colors.red.bold("X") : colors.green.bold("√"));
};

const cmd = new Command()
  .name("hello")
  .version("0.1.0")
  .description("A simple hello world application.")
  .action(async () => {
    const spinner = new Kia();

    spinner.start("Loading Hono value...");

    const hono = await fetchData(HONO_BASE_URL);
    const honoIsError = isError(hono);

    spinner.set("Loading Fiber value...");

    const fiber = await fetchData(FIBER_BASE_URL);
    const fiberIsError = isError(fiber);

    if (honoIsError || fiberIsError) {
      spinner.fail("An error occurred");
    } else {
      spinner.succeed("All values are loaded");
    }

    console.log();

    const table = new Table().header(["Server", "Status", "Value"]).body([
      ["Hono", getStatus(honoIsError), hono],
      ["Fiber", getStatus(fiberIsError), fiber],
    ]);

    table.render();
  });

await cmd.parse(Deno.args);
