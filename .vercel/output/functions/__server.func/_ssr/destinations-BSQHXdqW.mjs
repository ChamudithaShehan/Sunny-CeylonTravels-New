import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { r as destinations } from "./mock-BzBUXxz7.mjs";
import { n as DestinationCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destinations-BSQHXdqW.js
var import_jsx_runtime = require_jsx_runtime();
function Destinations() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Every corner of the pearl.",
		subtitle: "Ancient rock fortresses, misty highlands, palm-lined shores and leopard country — all within a single, small island.",
		image: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Destinations" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Explore",
				title: "Popular Destinations",
				subtitle: "Six regions, endless stories."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: destinations.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationCard, { d }, d.id))
			})]
		})
	})] });
}
//#endregion
export { Destinations as component };
