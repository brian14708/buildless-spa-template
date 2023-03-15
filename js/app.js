import { createApp } from "vue";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    defaultTheme: window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  },
});
const app = createApp({
  data() {
    return {
      count: 0,
    };
  },
});
app.use(vuetify).mount("#app");
