import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite"
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	
  plugins: [
	  uni(),
	AutoImport({
		  imports:['vue','vue-router']
	  })
	  ],
	resolve:{
		  alias: {
		        "@": pathSrc,
		      },
	}
});
