import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as Compass, g as Leaf, o as Sparkles, v as Heart } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { i as PageTransition, n as FadeIn, o as SectionTitle, r as PageHero, s as Stagger, t as Counter } from "./primitives-CIXPsD8P.mjs";
import { t as Button } from "./button-CP5hyYwr.mjs";
import { c as stats } from "./mock-BzBUXxz7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CoZjdEkD.js
var import_jsx_runtime = require_jsx_runtime();
var timeline = [
	{
		year: "2008",
		title: "A Family Dream",
		text: "Founder Nimal Perera guides his first guests through Sigiriya at sunrise."
	},
	{
		year: "2013",
		title: "Boutique Beginnings",
		text: "First office opens in Colombo. We begin curating heritage-hotel stays."
	},
	{
		year: "2018",
		title: "Global Recognition",
		text: "Named one of the world's top Sri Lanka specialists by Condé Nast Traveller."
	},
	{
		year: "2022",
		title: "Carbon-Positive",
		text: "Our tours become carbon-positive through partnerships with local reforestation projects."
	},
	{
		year: "2026",
		title: "12,000 Journeys",
		text: "We celebrate our 12,000th traveller — and are just getting started."
	}
];
var values = [
	{
		icon: Heart,
		title: "Warmth first",
		text: "We greet every traveller as family. It's the Sri Lankan way."
	},
	{
		icon: Leaf,
		title: "Regenerative travel",
		text: "Every tour funds reforestation and community education."
	},
	{
		icon: Compass,
		title: "Local mastery",
		text: "Our team lives here. We know the roads, the seasons, the secrets."
	},
	{
		icon: Sparkles,
		title: "Quiet luxury",
		text: "Understated excellence — never showy, always considered."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			title: "Crafted by locals, loved by the world.",
			subtitle: "For nearly two decades we've shaped bespoke journeys through the island we call home.",
			image: "https://images.unsplash.com/photo-1602898430243-9b7dfaeae7e7?auto=format&fit=crop&w=1920&q=80",
			breadcrumbs: [{ label: "About" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-6xl grid gap-16 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
					alt: "Sri Lankan hospitality",
					loading: "lazy",
					className: "rounded-3xl shadow-xl aspect-[4/5] object-cover w-full"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, {
					delay: .15,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-4",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-5xl font-bold leading-tight",
							children: "A journey that began on a rock in the jungle."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-4 text-muted-foreground leading-relaxed",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sunny Ceylon Travels was born in 2008 when Nimal Perera — a fifth-generation Kandyan and lifelong storyteller — guided a small family through the Cultural Triangle. That family wrote home that they had discovered \"the guide of a lifetime.\" The letters kept coming." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we are a team of 42 designers, chauffeur-guides, concierges and creatives, quietly building the finest bespoke journeys in Sri Lanka." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We believe true luxury is not marble bathrooms — it's the calm certainty that everything has been thought of, so you can simply be present." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8 rounded-full bg-secondary hover:bg-secondary/90 h-12 px-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Speak to a specialist"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-primary text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-4xl md:text-6xl font-bold text-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-xs uppercase tracking-widest text-white/80",
					children: s.label
				})] }, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Milestones",
					title: "Our Timeline"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-12",
						children: timeline.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "md:w-1/2 pl-12 md:pl-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `p-6 rounded-2xl bg-card border shadow-sm ${i % 2 === 0 ? "md:text-right" : ""}`,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-3xl font-bold text-primary",
												children: m.year
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl font-semibold mt-1",
												children: m.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground mt-2",
												children: m.text
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-4 w-4 rounded-full bg-secondary ring-4 ring-background" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:w-1/2" })
							]
						}) }, m.year))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 bg-muted/50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "What We Stand For",
					title: "Our Values"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							show: {
								opacity: 1,
								y: 0
							}
						},
						className: "p-8 rounded-2xl bg-card border shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-2",
								children: text
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x mx-auto max-w-6xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "The Team",
					title: "Faces behind the magic"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-8 grid-cols-2 md:grid-cols-4",
					children: [
						{
							name: "Nimal Perera",
							role: "Founder & CEO",
							img: "photo-1560250097-0b93528c311a"
						},
						{
							name: "Ayesha Silva",
							role: "Head of Design",
							img: "photo-1580489944761-15a19d654956"
						},
						{
							name: "Ravi Fernando",
							role: "Guest Experience",
							img: "photo-1507003211169-0a1dd7228f2d"
						},
						{
							name: "Nadia Weeraratne",
							role: "Sustainability",
							img: "photo-1573496359142-b8d87734a5a2"
						}
					].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: {
							hidden: {
								opacity: 0,
								y: 20
							},
							show: {
								opacity: 1,
								y: 0
							}
						},
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden rounded-3xl mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: `https://images.unsplash.com/${m.img}?auto=format&fit=crop&w=600&q=80`,
									alt: m.name,
									loading: "lazy",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: m.role
							})
						]
					}, m.name))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
