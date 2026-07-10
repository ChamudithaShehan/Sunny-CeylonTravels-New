import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { i as PageTransition, r as PageHero } from "./primitives-CIXPsD8P.mjs";
import { a as galleryImages } from "./mock-BzBUXxz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BI-WZZlU.js
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "A moment, a memory.",
		subtitle: "Sri Lanka through the lens of our travellers and guides.",
		image: "https://images.unsplash.com/photo-1580835845083-2adcd8ee6291?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Gallery" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]",
				children: [...galleryImages, ...galleryImages].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .5,
						delay: i % 6 * .05
					},
					className: "mb-4 break-inside-avoid overflow-hidden rounded-2xl group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "Sri Lanka",
						loading: "lazy",
						className: "w-full h-auto transition-transform duration-700 group-hover:scale-105"
					})
				}, i))
			})
		})
	})] });
}
//#endregion
export { Gallery as component };
