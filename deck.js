// import global stylesheet
import "./style.css";

// import `slides` from your mdx files and spread into `slides` export
import { slides as introduction } from "./slides/00-introduction.mdx";
import { slides as introductionFlutter } from "./slides/01-introduction-to-flutter.mdx";
import { slides as whatIsFlutterWidget } from "./slides/02-whats-is-flutter-widget.mdx";
import { slides as basicWidgets } from "./slides/03-basic-widgets.mdx";
import { slides as attributeAndValue } from "./slides/04-attribute-and-value.mdx";
import { slides as htmlInWebsite } from "./slides/05-html-in-web.mdx";
import { slides as directory } from "./slides/06-directory.mdx";
import { slides as penutup } from "./slides/07-penutupan.mdx";

// theme export for code-surfer
export { dracula as theme } from "code-surfer";

// Spread your slides here...
export const slides = [
  ...introduction,
  ...introductionFlutter,
  ...whatIsFlutterWidget,
  ...basicWidgets,
  ...attributeAndValue,
  ...htmlInWebsite,
  ...directory,
  ...penutup
];
