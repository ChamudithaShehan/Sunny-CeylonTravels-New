import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { t as Button } from "./button-CP5hyYwr.mjs";
import { l as tours } from "./mock-BzBUXxz7.mjs";
import { a as TourCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tours-CzbXkccE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATS = [
	"All",
	"Cultural",
	"Scenic",
	"Beach",
	"Wildlife",
	"Wellness",
	"Adventure"
];
function Tours() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = cat === "All" ? tours : tours.filter((t) => t.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Tour packages, made for you.",
		subtitle: "Choose a signature journey — or use it as a starting point for something entirely bespoke.",
		image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Tours" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Signature Journeys",
					title: "Our Tour Collection"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-wrap justify-center gap-2",
					children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: cat === c ? "default" : "outline",
						className: `rounded-full ${cat === c ? "bg-primary" : ""}`,
						onClick: () => setCat(c),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: t }, t.id))
				})
			]
		})
	})] });
}
//#endregion
export { Tours as component };
