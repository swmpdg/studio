import { NavigationItem } from "../../components/navigation/navigation.component";

export const NAVIGATION = [{
  type: "group",
  label: "studio",
  links: [{
    type: "link",
    label: "archive",
    link_url: "/archive",
    icon_class: "mdi-floppy"
  }, {
    type: "link",
    label: "workspace",
    link_url: "/workspace",
    icon_class: "mdi-brush"
  }, {
    type: "link",
    label: "settings",
    link_url: "/settings",
    icon_class: "mdi-settings"
  }]
}, {
  type: "group",
  label: "references",
  links: [{
    type: "link",
    label: "documentation",
    link_url: "/docs",
    icon_class: "mdi-bookmark-outline"
  }, {
    type: "link",
    label: "Github",
    link_url: "https://github.com/vandalsquad/studio",
    icon_class: "mdi-github-circle"
  }]
}] as NavigationItem[];
