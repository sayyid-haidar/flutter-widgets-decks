// import `slides` from your mdx files and spread into `slides` export
import { slides as introduction } from "./slides/00-introduction.mdx";
import { slides as webDevelopment } from "./slides/01-web-development.mdx";
import { slides as whatsIsHtml } from "./slides/02-whats-is-html.mdx";
import { slides as tagAndContent } from "./slides/03-tag-and-content.mdx";
import { slides as attributeAndValue } from "./slides/04-attribute-and-value.mdx";
import { slides as htmlInWebsite } from "./slides/05-html-in-web.mdx";
import { slides as directory } from "./slides/06-directory.mdx";

// theme export for code-surfer
export { dracula as theme } from "code-surfer";

// Spread your slides here...
export const slides = [
  ...introduction,
  ...webDevelopment,
  ...whatsIsHtml,
  ...tagAndContent,
  ...attributeAndValue,
  ...htmlInWebsite,
  ...directory
];
