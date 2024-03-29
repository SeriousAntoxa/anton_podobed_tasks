import {menuConfig, iconConfig} from "./configData.js"

export let iconConfigRotate = () => {
  if (!menuConfig.classList.contains("calendar__config-menu_vis")) {
    iconConfig.classList.add("fa-cog_rotate-down");
    iconConfig.classList.remove("fa-cog_rotate-up");
  } else {
    iconConfig.classList.add("fa-cog_rotate-up");
    iconConfig.classList.remove("fa-cog_rotate-down");
  }
  menuConfig.classList.toggle("calendar__config-menu_vis");
}