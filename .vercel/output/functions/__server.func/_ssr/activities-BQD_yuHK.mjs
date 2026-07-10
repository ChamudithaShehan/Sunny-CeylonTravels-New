import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { i as PageTransition, l as staggerItem, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger } from "./primitives-CIXPsD8P.mjs";
import { t as activities } from "./mock-BzBUXxz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activities-BQD_yuHK.js
var import_jsx_runtime = require_jsx_runtime();
function Activities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Adventures worth the pause.",
		subtitle: "Add unforgettable moments to any journey — from dawn balloon rides to leopard tracking.",
		image: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Activities" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Add-ons",
				title: "Signature Activities"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: staggerItem,
					className: "group rounded-2xl overflow-hidden bg-card shadow hover:shadow-xl transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a.image,
							alt: a.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: a.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [a.duration, " experience"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display font-bold text-primary text-xl",
								children: ["$", a.price]
							})]
						})]
					})]
				}, a.id))
			})]
		})
	})] });
}
//#endregion
export { Activities as component };
