import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { T as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as useMotionValue, n as animate, o as motion, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-CIXPsD8P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function FadeIn({ children, delay = 0, y = 24, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function Stagger({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		variants: {
			hidden: {},
			show: { transition: { staggerChildren: .08 } }
		},
		className,
		children
	});
}
var staggerItem = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function SectionTitle({ eyebrow, title, subtitle, align = "center", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-12 md:mb-16", align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl", className),
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-4"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/50" }),
					" ",
					eyebrow,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary/50" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl md:text-5xl font-bold text-balance leading-tight",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground text-base md:text-lg text-balance",
				children: subtitle
			})
		]
	});
}
function Counter({ to, suffix = "", duration = 2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
	const [val, setVal] = (0, import_react.useState)("0");
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(mv, to, {
			duration,
			ease: [
				.22,
				1,
				.36,
				1
			]
		});
		const unsub = rounded.on("change", (v) => setVal(v));
		return () => {
			controls.stop();
			unsub();
		};
	}, [
		inView,
		to,
		duration,
		mv,
		rounded
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [val, suffix]
	});
}
function PageHero({ title, subtitle, image, breadcrumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[52vh] min-h-[380px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: image,
				alt: "",
				loading: "eager",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 h-full container-x mx-auto max-w-7xl flex flex-col justify-end pb-14 pt-32 text-white",
				children: [
					breadcrumbs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 text-white/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "flex items-center gap-1 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-white",
								children: "Home"
							}), breadcrumbs.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }), b.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: b.to,
									className: "hover:text-white",
									children: b.label
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.label })]
							}, i))]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "font-display text-4xl md:text-6xl font-bold max-w-3xl text-balance",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .15
						},
						className: "mt-4 text-white/85 max-w-2xl text-base md:text-lg",
						children: subtitle
					})
				]
			})
		]
	});
}
function PageTransition({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.main, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -10
		},
		transition: {
			duration: .4,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
var fallbackPhotoSrc = "/fallback-photo.svg";
function SafeImage({ src, alt, className, loading = "lazy" }) {
	const [currentSrc, setCurrentSrc] = (0, import_react.useState)(src);
	(0, import_react.useEffect)(() => {
		setCurrentSrc(src);
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: currentSrc,
		alt,
		loading,
		onError: () => {
			if (currentSrc !== fallbackPhotoSrc) setCurrentSrc(fallbackPhotoSrc);
		},
		className
	});
}
//#endregion
export { SafeImage as a, cn as c, PageTransition as i, staggerItem as l, FadeIn as n, SectionTitle as o, PageHero as r, Stagger as s, Counter as t };
