import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { d as vehicles } from "./mock-BzBUXxz7.mjs";
import { o as VehicleCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/fleet-CydIzXBy.js
var import_jsx_runtime = require_jsx_runtime();
function Fleet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "On the road, in comfort.",
		subtitle: "Modern, immaculately kept vehicles paired with our finest English-speaking chauffeur-guides.",
		image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Fleet" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "The Fleet",
				title: "Choose your ride"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleCard, { v }, v.id))
			})]
		})
	})] });
}
//#endregion
export { Fleet as component };
