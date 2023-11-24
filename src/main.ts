import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinySmbTheme } from '@opentiny/vue-theme/theme' // 导入主题

new TinyThemeTool(tinySmbTheme, 'tinyStyleSheetId') // 初始化主题

createApp(App).mount('#app')
