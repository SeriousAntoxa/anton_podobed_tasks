import { configData } from "../../model/configModel/configModel"
import { formConfigChecked } from "./formConfigChecked"

export let configRender = (): void => {
  configData()
  formConfigChecked()
}