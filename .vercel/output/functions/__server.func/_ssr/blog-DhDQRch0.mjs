import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { n as blogPosts } from "./mock-BzBUXxz7.mjs";
import { t as BlogCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-DhDQRch0.js
var import_jsx_runtime = require_jsx_runtime();
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Stories from the island.",
		subtitle: "Insider guides, seasonal recommendations and tales from our travellers.",
		image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Journal" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Latest",
				title: "From the Journal"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
				children: [...blogPosts, ...blogPosts].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { p }, i))
			})]
		})
	})] });
}
//#endregion
export { Blog as component };
