import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, O as Calendar, S as Compass, T as ChevronRight, _ as Instagram, a as Star, d as Play, k as Award, l as Search, m as MapPin, o as Sparkles, r as Users, s as Shield, v as Heart } from "../_libs/lucide-react.mjs";
import { a as useScroll, o as motion, r as useTransform } from "../_libs/framer-motion.mjs";
import { a as SafeImage, i as PageTransition, l as staggerItem, n as FadeIn, o as SectionTitle, s as Stagger, t as Counter } from "./primitives-CIXPsD8P.mjs";
import { t as Button } from "./button-CP5hyYwr.mjs";
import { a as galleryImages, c as stats, d as vehicles, l as tours, n as blogPosts, o as hotels, r as destinations, s as reviews, t as activities, u as trustedBy } from "./mock-BzBUXxz7.mjs";
import { a as TourCard, i as ReviewCard, o as VehicleCard, r as HotelCard, t as BlogCard } from "./cards-BTeUcyIe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DiOr7pKJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-screen w-full overflow-hidden text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				autoPlay: true,
				muted: true,
				loop: true,
				playsInline: true,
				poster: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1920&q=80",
				className: "absolute inset-0 h-full w-full object-cover",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: "https://cdn.coverr.co/videos/coverr-tea-plantation-in-sri-lanka-6913/1080p.mp4",
					type: "video/mp4"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.25),transparent_60%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 container-x mx-auto max-w-7xl min-h-screen flex flex-col justify-center pt-24 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .7 },
						className: "inline-flex items-center gap-2 self-start rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90 mb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-secondary" }), " Voted #1 Luxury Operator · 2026"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .1
						},
						className: "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl text-balance",
						children: [
							"Sri Lanka, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-secondary",
								children: "artfully"
							}),
							" curated."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .25
						},
						className: "mt-6 max-w-xl text-lg text-white/85",
						children: "Private guides, heritage stays, ancient wonders and untouched shores — designed by locals who know every hidden lane."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .4
						},
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							className: "rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 h-12 shadow-xl shadow-secondary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/tours",
								children: ["Book Your Journey ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-1 h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							variant: "outline",
							className: "rounded-full h-12 border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-2 h-4 w-4" }), " Watch Film"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .55
						},
						onSubmit: (e) => e.preventDefault(),
						className: "mt-12 md:mt-16 max-w-4xl rounded-2xl md:rounded-full glass p-3 md:p-2 shadow-2xl grid gap-2 md:gap-0 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 px-4 py-2.5 md:py-3 text-foreground min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Destination"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "bg-transparent outline-none w-full text-sm font-medium",
										placeholder: "Where to?",
										defaultValue: "Sigiriya"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 px-4 py-2.5 md:py-3 border-t md:border-t-0 md:border-l text-foreground min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Dates"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "bg-transparent outline-none w-full text-sm font-medium",
										placeholder: "Add dates",
										defaultValue: "Mar 12 – Mar 19"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 px-4 py-2.5 md:py-3 border-t md:border-t-0 md:border-l text-foreground min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Guests"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "bg-transparent outline-none w-full text-sm font-medium",
										placeholder: "2 adults",
										defaultValue: "2 adults"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								size: "lg",
								className: "rounded-full bg-primary hover:bg-primary/90 h-12 px-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 md:mr-2" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden md:inline",
										children: "Search"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .9,
							delay: .75
						},
						className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl",
						children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-dark rounded-2xl p-4 md:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-2xl md:text-3xl font-bold text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
									to: s.value,
									suffix: s.suffix
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-widest text-white/70 mt-1",
								children: s.label
							})]
						}, s.label))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.2,
					duration: 1
				},
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] hidden md:block",
				children: "Scroll to explore"
			})
		]
	});
}
function TrustedBy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-14 border-b bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8",
				children: "Featured & trusted by"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16",
				children: trustedBy.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg md:text-xl font-semibold text-foreground/40 hover:text-foreground transition",
					children: b
				}, b))
			})] })
		})
	});
}
function FeaturedTours() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Signature Journeys",
					title: "Featured Tours",
					subtitle: "Handpicked itineraries that capture the essence of Sri Lanka — from ancient kingdoms to hidden bays."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
					className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: tours.filter((t) => t.featured).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCard, { tour: t }, t.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "rounded-full h-12 px-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/tours",
							children: ["Explore all tours ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				})
			]
		})
	});
}
function BentoTile({ d, large = false, isElla = false, className = "" }) {
	const tileRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: tileRef,
		offset: ["start end", "end start"]
	});
	const parallaxY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref: isElla ? tileRef : void 0,
		variants: staggerItem,
		className: `group relative overflow-hidden rounded-2xl md:rounded-3xl bg-muted shadow-[0_0_0_1px_rgba(180,160,120,0.18)] ring-1 ring-inset ring-white/10 transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(180,160,120,0.35)] ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden ${large ? "aspect-[16/10] sm:aspect-[16/9] md:aspect-auto md:h-full" : "aspect-[4/3] sm:aspect-[4/5] md:aspect-auto md:h-full"}`,
			children: [
				isElla ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 will-change-transform",
					style: { y: parallaxY },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
						src: d.image,
						alt: d.name,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: d.image,
					alt: d.name,
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						x: 0,
						y: 0
					},
					whileHover: {
						x: 6,
						y: -6
					},
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 20
					},
					className: "absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-auto md:max-w-[220px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-3 py-2 md:px-4 md:py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.24em] text-white/90 font-semibold drop-shadow-md",
								children: d.region
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base sm:text-lg md:text-xl font-bold text-white mt-0.5 leading-tight drop-shadow-md",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] sm:text-xs text-white/80 mt-1 line-clamp-1 md:line-clamp-2 drop-shadow-md",
								children: d.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 flex items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center text-[10px] md:text-[11px] font-semibold text-white bg-white/20 backdrop-blur-md rounded-full px-2.5 py-0.5 shadow-sm",
									children: [
										d.tours,
										" tour",
										d.tours !== 1 ? "s" : ""
									]
								})
							})
						]
					})
				})
			]
		})
	});
}
function PopularDestinations() {
	const ella = destinations.find((d) => d.name === "Ella");
	const sigiriya = destinations.find((d) => d.name === "Sigiriya");
	const galle = destinations.find((d) => d.name === "Galle");
	const kandy = destinations.find((d) => d.name === "Kandy");
	const mirissa = destinations.find((d) => d.name === "Mirissa");
	const yala = destinations.find((d) => d.name === "Yala");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Where to go",
					title: "Popular Destinations",
					align: "left",
					className: "mb-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/destinations",
					className: "text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
				className: "grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[minmax(200px,1fr)] md:gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: sigiriya,
						className: "md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: ella,
						large: true,
						isElla: true,
						className: "md:col-start-4 md:col-span-6 md:row-start-1 md:row-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: galle,
						className: "md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: mirissa,
						className: "md:col-start-1 md:col-span-3 md:row-start-2 md:row-span-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: kandy,
						className: "md:col-start-10 md:col-span-3 md:row-start-2 md:row-span-1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BentoTile, {
						d: yala,
						className: "md:col-start-1 md:col-span-4 md:row-start-3 md:row-span-1"
					})
				]
			})]
		})
	});
}
function WhyChooseUs() {
	const items = [
		{
			icon: Shield,
			title: "Trusted for 18 Years",
			text: "IATA & SLTDA licensed, with unbroken 5-star reviews since 2008."
		},
		{
			icon: Award,
			title: "Award-Winning Craft",
			text: "Recognised by Condé Nast, T+L and BBC as a top Sri Lanka specialist."
		},
		{
			icon: Heart,
			title: "Locally Rooted",
			text: "Every guide, driver and property partner is family we've worked with for years."
		},
		{
			icon: Compass,
			title: "Truly Bespoke",
			text: "No cookie-cutter groups. Your itinerary is designed around you, alone."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: "https://snslearninglk.com/wp-content/uploads/2026/03/Galle-Fort-Travel-Guide-2026.png",
					alt: "Beautiful mountain landscape",
					loading: "lazy",
					className: "rounded-3xl shadow-2xl aspect-[4/5] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-6 shadow-2xl max-w-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1 mb-2",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-bold",
							children: "4.96 / 5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "2,140+ verified reviews"
						})
					]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Why Sunny Ceylon",
				title: "Luxury woven with sincerity.",
				align: "left",
				subtitle: "We believe true luxury is the calm confidence that everything — every meal, every transfer, every sunrise — has been thought of."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-10 grid sm:grid-cols-2 gap-6",
				children: items.map(({ icon: Icon, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md hover:-translate-y-1 transition",
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
							className: "text-sm text-muted-foreground mt-1.5",
							children: text
						})
					]
				}, title))
			})] })]
		})
	});
}
function TourCategories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-muted/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "By Experience",
				title: "Tour Categories",
				subtitle: "Whatever moves you — culture, coastline or canopy — we have a journey shaped for it."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
				children: [
					{
						name: "Cultural",
						image: "photo-1588598198321-9735fd52455b"
					},
					{
						name: "Beach",
						image: "photo-1507525428034-b723cf961d3e"
					},
					{
						name: "Wildlife",
						image: "photo-1516426122078-c23e76319801"
					},
					{
						name: "Wellness",
						image: "photo-1540555700478-4be289fbecef"
					},
					{
						name: "Adventure",
						image: "photo-1464822759023-fed622ff2c3b"
					},
					{
						name: "Honeymoon",
						image: "photo-1519741497674-611481863552"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
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
					className: "group relative aspect-square overflow-hidden rounded-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
							src: `https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=500&q=80`,
							alt: c.name,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-x-0 bottom-0 p-4 text-white font-display font-semibold text-lg text-left",
							children: c.name
						})
					]
				}, c.name))
			})]
		})
	});
}
function SpecialOffers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Limited Time",
				title: "Special Offers",
				subtitle: "Curated escapes with members-only savings — usually gone within a fortnight."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						tag: "Save 25%",
						title: "Southern Beach Escape",
						sub: "8 nights · Private villa · Book by 31 May",
						price: 1890,
						orig: 2520,
						image: "photo-1507525428034-b723cf961d3e"
					},
					{
						tag: "Free Upgrade",
						title: "Tea Country Rail",
						sub: "5 nights · Suite upgrade included",
						price: 1240,
						orig: 1490,
						image: "photo-1546484475-7f7bd55792da"
					},
					{
						tag: "Complimentary Spa",
						title: "Ayurveda Retreat",
						sub: "6 nights · Daily treatments",
						price: 1450,
						orig: 1650,
						image: "photo-1540555700478-4be289fbecef"
					}
				].map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
								src: `https://images.unsplash.com/${o.image}?auto=format&fit=crop&w=800&q=80`,
								alt: o.title,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 left-4 rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold",
								children: o.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-2xl font-bold",
										children: o.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-white/80 mt-1",
										children: o.sub
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-white/60 line-through mr-2",
											children: ["$", o.orig]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-3xl font-bold",
											children: ["$", o.price]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											className: "rounded-full bg-white text-foreground hover:bg-white/90",
											children: "Book"
										})]
									})
								]
							})
						]
					})
				}, o.title))
			})]
		})
	});
}
function AdventureActivities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-muted/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "Do Something Wild",
				title: "Adventure Activities",
				subtitle: "Beyond the itinerary — add unforgettable moments."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
				children: activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "group rounded-2xl overflow-hidden bg-card shadow hover:shadow-lg transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-square overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
							src: a.image,
							alt: a.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-sm",
							children: a.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.duration }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-primary",
								children: ["$", a.price]
							})]
						})]
					})]
				}, a.id))
			})]
		})
	});
}
function LuxuryHotels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-12 gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "Where you'll rest",
					title: "Luxury Hotels",
					align: "left",
					className: "mb-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/hotels",
					className: "text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: hotels.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HotelCard, { h }, h.id))
			})]
		})
	});
}
function FleetPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-muted/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: "On the Road",
				title: "The Sunny Ceylon Fleet",
				subtitle: "From chauffeured Mercedes sedans to safari-ready Land Cruisers."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: vehicles.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VehicleCard, { v }, v.id))
			})]
		})
	});
}
function CustomerReviews() {
	const row1 = [
		...reviews,
		...reviews,
		...reviews,
		...reviews
	];
	const row2 = [
		...reviews,
		...reviews,
		...reviews,
		...reviews
	].reverse();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-secondary font-semibold mb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-secondary/50" }),
						" In their words",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-secondary/50" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-5xl font-bold text-balance",
					children: "Stories from our travellers"
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-12 -mx-4 px-4 sm:mx-0 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] flex flex-col gap-6 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-6",
					children: row1.map((r, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[85vw] sm:w-[320px] lg:w-[360px] shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { r })
					}, `r1-${index}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex w-max animate-marquee-right hover:[animation-play-state:paused] gap-6",
					children: row2.map((r, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-[85vw] sm:w-[320px] lg:w-[360px] shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewCard, { r })
					}, `r2-${index}`))
				})]
			})]
		})]
	});
}
function InstagramGrid() {
	const featuredGallery = [
		{
			src: galleryImages[0],
			title: "Sigiriya at sunrise",
			caption: "Ancient stone, soft light",
			span: "lg:col-span-5 lg:row-span-2",
			ratio: "aspect-[4/5]"
		},
		{
			src: galleryImages[1],
			title: "Tea country mood",
			caption: "Green hills and slow mornings",
			span: "lg:col-span-4",
			ratio: "aspect-[4/3]"
		},
		{
			src: galleryImages[2],
			title: "Coastline escape",
			caption: "Barefoot luxury by the sea",
			span: "lg:col-span-3 lg:row-span-2",
			ratio: "aspect-[3/4]"
		},
		{
			src: galleryImages[3],
			title: "Wildlife moments",
			caption: "Quiet encounters in the park",
			span: "lg:col-span-4",
			ratio: "aspect-[4/3]"
		},
		{
			src: "https://www.yogawinetravel.com/wp-content/uploads/2017/12/Lankathilaka-Polonnaruwa-Sri-Lanka-2-1-683x1024.jpg",
			title: "Fort textures",
			caption: "Old walls, modern wanderlust",
			span: "lg:col-span-4",
			ratio: "aspect-[4/3]"
		},
		{
			src: "https://www.bluelankatours.com/wp-content/uploads/2020/01/Evening_Pool_View_at_Anantara_Peace_Haven.jpg",
			title: "Poolside calm",
			caption: "Design details, made for lingered afternoons",
			span: "lg:col-span-4",
			ratio: "aspect-[4/3]"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center mb-12 md:mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary shadow-sm backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @sunnyceylon"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl md:text-5xl font-bold text-balance",
						children: "Follow the journey"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-muted-foreground text-base md:text-lg text-balance",
						children: "A living mosaic of arrivals, coastlines, tea hills and heritage moments from recent guest journeys."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:items-stretch md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 md:gap-5 lg:grid-cols-12 md:auto-rows-[minmax(0,1fr)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
				children: featuredGallery.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
					href: "/gallery",
					initial: {
						opacity: 0,
						y: 24,
						scale: .98
					},
					whileInView: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .6,
						delay: i * .06,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: `shrink-0 w-[85vw] sm:w-[60vw] snap-center md:w-auto md:shrink group relative overflow-hidden rounded-[1.75rem] bg-muted shadow-[0_18px_60px_-28px_rgba(15,23,42,0.45)] ${item.span}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative ${item.ratio} md:h-full`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
								src: item.src,
								alt: item.title,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.18)_45%,rgba(15,23,42,0.72)_100%)] opacity-85 transition group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-5 md:p-6 text-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-white/75",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-6 bg-secondary/80" }), " Recent guest story"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl md:text-[2rem] font-bold leading-tight",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-md text-sm md:text-base text-white/80",
										children: item.caption
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-secondary" }), " Tap to explore"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/12 text-white backdrop-blur-md ring-1 ring-white/20 opacity-0 transition group-hover:opacity-100",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
							})
						]
					})
				}, item.src))
			})]
		})
	});
}
function TravelBlog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-muted/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-12 gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: "From the Journal",
					title: "Stories & Guides",
					align: "left",
					className: "mb-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all",
					children: ["All articles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-8 md:grid-cols-3",
				children: blogPosts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogCard, { p }, p.id))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustedBy, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedTours, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopularDestinations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TourCategories, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecialOffers, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdventureActivities, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxuryHotels, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FleetPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerReviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramGrid, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TravelBlog, {})
	] });
}
//#endregion
export { Home as component };
