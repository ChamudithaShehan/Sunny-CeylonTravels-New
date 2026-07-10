import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { o as hotels } from "./mock-BzBUXxz7.mjs";
import { r as HotelCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hotels-Vdht-l8p.js
var import_jsx_runtime = require_jsx_runtime();
function Hotels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Where you'll rest, beautifully.",
		subtitle: "Only the finest hotels, villas and heritage properties make our list.",
		image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Hotels" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Curated Stays",
				title: "Our Hotel Partners"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
				children: [...hotels, ...hotels].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotelCard, { h }, i))
			})]
		})
	})] });
}
//#endregion
export { Hotels as component };
