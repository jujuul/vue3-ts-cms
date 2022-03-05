import type { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElAlert,
  ElAside,
  ElButton,
  ElFormItem,
  ElInput,
  ElRadio
} from 'element-plus'
const components = [ElAlert, ElAside, ElButton, ElFormItem, ElInput, ElRadio]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
