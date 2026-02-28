import { defineConfig } from "vite";
import { resolve } from "path";
import fg from "fast-glob"; // Import the whole thing as a default object

export default defineConfig({
  build: {
    rollupOptions: {
      // Use fg.sync instead of trying to destructure globSync
      input: Object.fromEntries(
        fg
          .sync(["**/*.html"], { ignore: ["dist/**", "node_modules/**"] })
          .map((file) => [file.replace(".html", ""), resolve(__dirname, file)]),
      ),
    },
  },
});
