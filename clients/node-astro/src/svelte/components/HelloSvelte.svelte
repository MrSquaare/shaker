<script lang="ts">
  import { onMount } from "svelte";
  import { FIBER_BASE_URL } from "../../constants/servers";

  export let value: string;

  let data: string;
  let isError = false;

  const fetchData = async () => {
    try {
      const res = await fetch(FIBER_BASE_URL);

      data = await res.text();
    } catch {
      isError = true;
    }
  };

  onMount(() => {
    fetchData();
  });
</script>

<div class="flex items-center gap-4 rounded-xl border-2 border-orange-500 p-4">
  <iconify-icon
    class="text-6xl font-bold text-orange-500"
    icon="simple-icons:svelte"
  />
  <div>
    <h1 class="text-2xl font-bold text-orange-500">Hello, Svelte!</h1>
    <p><span class="font-bold">Hono value:</span> {value}</p>
    <p>
      <span class="font-bold">Fiber value:</span>
      {isError ? "Error" : !data ? "Loading..." : data}
    </p>
  </div>
</div>
