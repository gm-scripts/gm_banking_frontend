import { ref } from "vue";

const url = "http://localhost:3000";

const cssConfig = ref({
  "--brand": "#23bf7c",
  "--bg-primary": "#4a4a55",
  "--bg-secondary": "#35353f",
  "--bg-tertiary": "#23232f",
  "--text-primary": "#eaeaf4",
  "--text-secondary": "#e8e8ef",
  "--text-tertiary": "#d8d8e4",
  "--tl-active": "#ff666f",
  "--tl-inactive": "#4a4a55",

  "--scale": 1,
});

const langDashboard = ref({});

function post(path: string, body: Record<string, unknown>) {
  return fetch(url + path, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

function fetchConfig(): void {
  post("/css", {}).then((data) => (cssConfig.value = { ...data }));
}

export { cssConfig, fetchConfig, langDashboard };
