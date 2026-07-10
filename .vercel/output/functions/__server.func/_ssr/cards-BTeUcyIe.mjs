import "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, C as Clock, a as Star, m as MapPin, r as Users, u as Quote } from "../_libs/lucide-react.mjs";
import { o as motion } from "../_libs/framer-motion.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as SafeImage, c as cn, l as staggerItem } from "./primitives-CIXPsD8P.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function TourCard({ tour }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		variants: staggerItem,
		className: "group relative overflow-hidden rounded-2xl bg-card shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_-15px_rgba(15,118,110,0.25)] transition-all duration-500",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: tour.image,
					alt: tour.title,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					className: "absolute top-4 left-4 bg-white/95 text-foreground hover:bg-white",
					children: tour.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 right-4 rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-xs text-white flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" }),
						" ",
						tour.rating
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-4 left-4 right-4 text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-xs opacity-90 mb-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }),
							" ",
							tour.location
						]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors",
					children: tour.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-4 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5" }),
							" ",
							tour.days,
							"D / ",
							tour.nights,
							"N"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
							" ",
							tour.reviews,
							" reviews"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center justify-between border-t pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "From"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-2xl font-bold text-primary",
						children: ["$", tour.price.toLocaleString()]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tours",
						className: "inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all",
						children: ["Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})
			]
		})]
	});
}
function DestinationCard({ d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: staggerItem,
		className: "group relative aspect-[3/4] overflow-hidden rounded-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: d.image,
				alt: d.name,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 p-6 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-[0.24em] text-white/70",
						children: d.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl font-bold mt-1",
						children: d.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-white/80 mt-2 line-clamp-2",
						children: d.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs bg-white/15 backdrop-blur px-3 py-1 rounded-full",
							children: [d.tours, " tours"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/destinations",
							className: "text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all",
							children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			})
		]
	});
}
function HotelCard({ h }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: staggerItem,
		className: "group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: h.image,
				alt: h.name,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-3 left-3 flex gap-0.5",
				children: Array.from({ length: h.stars }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" }, i))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold truncate",
						children: h.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground flex items-center gap-1 mt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3" }), h.location]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase text-muted-foreground",
						children: "Night"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display font-bold text-primary",
						children: ["$", h.price]
					})]
				})]
			})
		})]
	});
}
function ReviewCard({ r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: staggerItem,
		className: "relative rounded-2xl bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all h-full flex flex-col overflow-hidden group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 right-0 -mr-6 -mt-6 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.05]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-32 w-32" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 flex flex-col h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 mb-4",
					children: Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" }, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-foreground/80 font-serif text-sm leading-relaxed flex-1",
					children: [
						"\"",
						r.text,
						"\""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-center gap-3 pt-4 border-t border-border/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
						src: r.avatar,
						alt: r.name,
						loading: "lazy",
						className: "h-10 w-10 rounded-full object-cover ring-2 ring-background shadow-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-xs",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5",
						children: [
							r.country,
							" · ",
							r.tour
						]
					})] })]
				})
			]
		})]
	});
}
function BlogCard({ p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		variants: staggerItem,
		className: "group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: p.image,
				alt: p.title,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				className: "absolute top-4 left-4 bg-white/95 text-foreground",
				children: p.category
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground mb-2",
					children: [
						p.date,
						" · ",
						p.readTime,
						" min read"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold leading-snug group-hover:text-primary transition line-clamp-2",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-2 line-clamp-2",
					children: p.excerpt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
					children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
			]
		})]
	});
}
function VehicleCard({ v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: staggerItem,
		className: "group overflow-hidden rounded-2xl bg-card shadow-md hover:shadow-xl transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: v.image,
				alt: v.name,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: v.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold",
					children: v.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: v.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] uppercase tracking-wider bg-muted rounded-full px-2 py-1",
						children: f
					}, f))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center justify-between border-t pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3.5 w-3.5" }),
							v.seats,
							" seats"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display font-bold text-primary",
						children: [
							"$",
							v.pricePerDay,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground font-sans",
								children: "/day"
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
export { TourCard as a, ReviewCard as i, DestinationCard as n, VehicleCard as o, HotelCard as r, BlogCard as t };
