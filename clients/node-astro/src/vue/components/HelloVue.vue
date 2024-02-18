<script setup lang="ts">
import { onMounted, ref } from "vue";

import { FIBER_BASE_URL } from "../../constants/servers.ts";

defineProps({
  value: { type: String, required: true },
});

const data = ref<string | null>(null);
const isError = ref(false);

const fetchData = async () => {
  try {
    const res = await fetch(FIBER_BASE_URL);

    data.value = await res.text();
  } catch {
    isError.value = true;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="flex items-center gap-4 rounded-xl border-2 border-green-500 p-4">
    <iconify-icon
      class="text-6xl font-bold text-green-500"
      icon="simple-icons:vuedotjs"
    />
    <div>
      <h1 class="text-2xl font-bold text-green-500">Hello, Vue!</h1>
      <p>
        <span class="font-bold">Hono value:</span>
        {{ value }}
      </p>
      <p>
        <span class="font-bold">Fiber value:</span>
        {{ isError ? "Error" : !data ? "Loading..." : data }}
      </p>
    </div>
  </div>
</template>
