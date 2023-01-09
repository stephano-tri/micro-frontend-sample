import { registerApplication, start } from "single-spa";

registerApplication(
    'vue',
    () => import ('./src/vue/vue.app.ts'),
    () => location.pathname !== "/react"
);

registerApplication(
    'react',
    () => import('./src/react/main.app.ts'),
    () => location.pathname !== "/vue"
);

start();
