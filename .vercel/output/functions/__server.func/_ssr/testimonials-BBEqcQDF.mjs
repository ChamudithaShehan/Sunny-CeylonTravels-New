import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { s as reviews } from "./mock-BzBUXxz7.mjs";
import { i as ReviewCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-BBEqcQDF.js
var import_jsx_runtime = require_jsx_runtime();
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "In their words.",
		subtitle: "Every review is unedited and unpaid. Every one is a family story.",
		image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Testimonials" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 bg-muted/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "4.96 / 5",
				title: "Stories from our travellers"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: [
					...reviews,
					...reviews,
					...reviews
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { r }, i))
			})]
		})
	})] });
}
//#endregion
export { Testimonials as component };
