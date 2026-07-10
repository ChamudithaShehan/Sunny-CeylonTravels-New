import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Check, T as ChevronRight, _ as Instagram, b as Facebook, c as Send, f as Phone, h as Mail, i as Twitter, l as Search, m as MapPin, n as X, o as Sparkles, p as Menu, t as Youtube, w as Circle, x as DollarSign, y as Globe } from "../_libs/lucide-react.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as SafeImage, c as cn, n as FadeIn } from "./primitives-CIXPsD8P.mjs";
import { t as Button } from "./button-CP5hyYwr.mjs";
import { t as Input } from "./input-CcFuZBEl.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-8ITx4eHE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-q4UvlyvS.css";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Destinations",
		to: "/destinations"
	},
	{
		label: "Tours",
		to: "/tours"
	},
	{
		label: "Hotels",
		to: "/hotels"
	},
	{
		label: "Activities",
		to: "/activities"
	},
	{
		label: "Fleet",
		to: "/fleet"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Blog",
		to: "/blog"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [lang, setLang] = (0, import_react.useState)("EN");
	const [ccy, setCcy] = (0, import_react.useState)("USD");
	const overHero = useRouterState({ select: (s) => s.location.pathname }) === "/";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const solid = scrolled || !overHero;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .5 },
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", solid ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_-15px_rgba(0,0,0,0.15)]" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl flex h-18 md:h-20 items-center justify-between py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg transition-transform group-hover:scale-105"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("font-display text-lg md:text-xl font-bold tracking-tight", solid ? "text-foreground" : "text-white"),
							children: "Sunny Ceylon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-[10px] uppercase tracking-[0.2em]", solid ? "text-muted-foreground" : "text-white/70"),
							children: "Travels"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV.slice(0, 8).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: cn("relative px-3 py-2 text-sm font-medium transition-colors rounded-md", solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"),
						activeProps: { className: solid ? "text-primary" : "text-white" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 md:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "Search",
							onClick: () => setSearchOpen(true),
							className: cn(solid ? "text-foreground" : "text-white hover:bg-white/10 hover:text-white"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: cn("hidden md:inline-flex gap-1", solid ? "" : "text-white hover:bg-white/10 hover:text-white"),
								"aria-label": "Language",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }),
									" ",
									lang
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							children: [
								"EN",
								"FR",
								"DE",
								"中文",
								"日本語"
							].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => setLang(l),
								children: l
							}, l))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "sm",
								className: cn("hidden md:inline-flex gap-1", solid ? "" : "text-white hover:bg-white/10 hover:text-white"),
								"aria-label": "Currency",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "h-4 w-4" }),
									" ",
									ccy
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
							align: "end",
							children: [
								"USD",
								"EUR",
								"GBP",
								"AUD",
								"LKR"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onSelect: () => setCcy(c),
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "hidden md:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-5 shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Book Now"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								className: cn("lg:hidden", solid ? "" : "text-white hover:bg-white/10 hover:text-white"),
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							side: "right",
							className: "w-[85%] sm:w-96",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1 pt-8",
								children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: n.to,
									className: "px-3 py-3 text-base font-medium rounded-md hover:bg-muted transition",
									children: n.label
								}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-4 bg-secondary hover:bg-secondary/90 rounded-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Book Now"
									})
								})]
							})
						})] })
					]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: searchOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[60] bg-background/95 backdrop-blur-md flex items-start justify-center pt-32 px-4",
		onClick: () => setSearchOpen(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: -20,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			exit: {
				y: -20,
				opacity: 0
			},
			className: "w-full max-w-2xl bg-card rounded-2xl shadow-2xl border p-6",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						placeholder: "Search destinations, tours, experiences…",
						className: "flex-1 bg-transparent outline-none text-lg"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						onClick: () => setSearchOpen(false),
						"aria-label": "Close search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					"Sigiriya",
					"Ella",
					"Galle",
					"Yala Safari",
					"Ayurveda",
					"Whale Watching"
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-full border px-3 py-1 text-xs hover:bg-muted transition",
					children: s
				}, s))
			})]
		})
	}) })] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-[#0b1220] text-white/80 mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-7xl py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 md:col-span-1 lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl font-bold text-white",
									children: "Sunny Ceylon"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.2em] text-white/50",
									children: "Travels"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed max-w-sm",
								children: "Crafting bespoke luxury journeys through the wonders of Sri Lanka since 2008. Locally rooted, globally trusted."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +94 11 234 5678"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " hello@sunnyceylon.travel"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " 42 Galle Face Terrace, Colombo 03"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-3",
								children: [
									Facebook,
									Instagram,
									Youtube,
									Twitter
								].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": "social",
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-primary transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, i))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-white text-lg mb-4",
							children: "Quick Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm",
							children: [
								["About", "/about"],
								["Destinations", "/destinations"],
								["Tours", "/tours"],
								["Blog", "/blog"],
								["FAQ", "/faq"],
								["Contact", "/contact"]
							].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: h,
								className: "hover:text-primary transition",
								children: l
							}) }, l))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-white text-lg mb-4",
							children: "Popular Tours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm",
							children: [
								"Cultural Triangle",
								"Tea Country Rail",
								"Southern Beaches",
								"Yala Safari",
								"Ayurveda Retreat"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tours",
								className: "hover:text-primary transition",
								children: t
							}) }, t))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 md:col-span-1 lg:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-white text-lg mb-4",
								children: "Newsletter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mb-3",
								children: "Monthly stories & members-only offers."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: (e) => e.preventDefault(),
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "you@email.com",
									className: "bg-white/10 border-white/15 text-white placeholder:text-white/50"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									className: "bg-secondary hover:bg-secondary/90 shrink-0",
									"aria-label": "Subscribe",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 rounded-xl overflow-hidden border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: "https://maps.google.com/maps?q=Colombo,%20Sri%20Lanka&t=&z=11&ie=UTF8&iwloc=&output=embed",
									className: "aspect-[16/9] w-full",
									style: { border: 0 },
									allowFullScreen: true,
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade"
								})
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sunny Ceylon Travels. All rights reserved."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Development by ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-white underline underline-offset-2",
						children: [
							"Brain",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[var(--gold)]",
								children: "t"
							}),
							"isa"
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "hover:text-white",
							children: "Privacy Policy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "hover:text-white",
							children: "Terms & Conditions"
						})]
					})
				]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Newsletter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-t border-border/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x mx-auto max-w-4xl text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-10 md:p-16 text-primary-foreground shadow-2xl relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-8 w-8 text-secondary mb-4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-5xl font-bold text-balance",
							children: "Join the Sunny Ceylon Club"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/85 max-w-xl mx-auto",
							children: "Monthly stories, insider itineraries and members-only offers. No spam. Ever."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => e.preventDefault(),
							className: "mt-8 flex flex-col sm:flex-row max-w-lg mx-auto gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "you@email.com",
								className: "bg-white/10 border-white/25 text-white placeholder:text-white/60 h-12 rounded-full px-6"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								className: "bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-12 px-8 shrink-0",
								children: "Subscribe"
							})]
						})
					]
				})]
			}) })
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-24 md:py-32 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: "https://5.imimg.com/data5/EN/QW/GLADMIN-62515817/kanyakumari-tour-package-service-1000x1000.png",
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative container-x mx-auto max-w-7xl text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance",
							children: "Your Sri Lanka story begins here."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-white/85 text-lg",
							children: "Speak to a specialist. No obligation, just inspiration."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-full bg-secondary hover:bg-secondary/90 h-12 px-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									children: "Plan my journey"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-full h-12 px-8 border-white/40 text-white bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tours",
									children: "Browse tours"
								})
							})]
						})
					]
				}) })
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-background px-4 pt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-8xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl font-semibold",
					children: "Off the beaten path"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page seems to have wandered into the jungle. Let us guide you back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition",
						children: "Return home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Please try again or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$14 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sunny Ceylon Travels · Luxury Sri Lanka Journeys" },
			{
				name: "description",
				content: "Bespoke luxury tours across Sri Lanka — cultural triangles, tea country, southern beaches, wildlife safaris and Ayurveda retreats crafted by local experts."
			},
			{
				name: "author",
				content: "Sunny Ceylon Travels"
			},
			{
				name: "theme-color",
				content: "#0F766E"
			},
			{
				property: "og:title",
				content: "Sunny Ceylon Travels · Luxury Sri Lanka Journeys"
			},
			{
				property: "og:description",
				content: "Bespoke luxury tours across Sri Lanka crafted by local experts."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$14.useRouteContext();
	const isContactPage = useRouterState({ select: (s) => s.location.pathname }) === "/contact";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {}),
			!isContactPage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-right" })
		]
	});
}
var $$splitComponentImporter$13 = () => import("./tours-CzbXkccE.mjs");
var Route$13 = createFileRoute("/tours")({
	head: () => ({ meta: [
		{ title: "Tour Packages · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Handpicked luxury Sri Lanka tour packages — cultural triangles, tea country escapes, honeymoons, safaris and wellness retreats."
		},
		{
			property: "og:title",
			content: "Luxury Sri Lanka Tour Packages"
		},
		{
			property: "og:description",
			content: "Handpicked luxury Sri Lanka tour packages."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./testimonials-BBEqcQDF.mjs");
var Route$12 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Testimonials · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Read what our travellers say about their Sri Lanka journeys with Sunny Ceylon."
		},
		{
			property: "og:title",
			content: "Traveller Testimonials"
		},
		{
			property: "og:description",
			content: "Read what our travellers say about their Sri Lanka journeys."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./terms-D_To8Pzd.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Terms and conditions of booking with Sunny Ceylon Travels."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./privacy-D6xnykLu.mjs");
var Route$10 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy Policy · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Our privacy policy and data handling practices."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./hotels-Vdht-l8p.mjs");
var Route$9 = createFileRoute("/hotels")({
	head: () => ({ meta: [
		{ title: "Luxury Hotels · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Handpicked boutique and five-star hotels across Sri Lanka — from Galle Fort to the tea country."
		},
		{
			property: "og:title",
			content: "Luxury Hotels in Sri Lanka"
		},
		{
			property: "og:description",
			content: "Handpicked boutique and five-star hotels across Sri Lanka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./gallery-BI-WZZlU.mjs");
var Route$8 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "A visual journey through Sri Lanka — captured by our travellers and guides."
		},
		{
			property: "og:title",
			content: "Sri Lanka Gallery"
		},
		{
			property: "og:description",
			content: "A visual journey through Sri Lanka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./fleet-CydIzXBy.mjs");
var Route$7 = createFileRoute("/fleet")({
	head: () => ({ meta: [
		{ title: "Vehicle Fleet · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Chauffeur-driven Mercedes sedans, Land Cruisers and luxury coaches for your Sri Lanka journey."
		},
		{
			property: "og:title",
			content: "Chauffeured Vehicle Fleet"
		},
		{
			property: "og:description",
			content: "Chauffeur-driven Mercedes sedans, Land Cruisers and luxury coaches."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faq-D-p_Tp1F.mjs");
var Route$6 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Frequently asked questions about travelling to Sri Lanka with Sunny Ceylon."
		},
		{
			property: "og:title",
			content: "Sri Lanka Travel FAQ"
		},
		{
			property: "og:description",
			content: "Frequently asked questions about travelling to Sri Lanka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./destinations-BSQHXdqW.mjs");
var Route$5 = createFileRoute("/destinations")({
	head: () => ({ meta: [
		{ title: "Destinations · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Explore Sri Lanka's most extraordinary destinations — from Sigiriya to the southern coast."
		},
		{
			property: "og:title",
			content: "Sri Lanka Destinations"
		},
		{
			property: "og:description",
			content: "Explore Sri Lanka's most extraordinary destinations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-CuEbK4il.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Speak to a Sri Lanka travel specialist. No obligation, just inspiration."
		},
		{
			property: "og:title",
			content: "Contact Sunny Ceylon Travels"
		},
		{
			property: "og:description",
			content: "Speak to a Sri Lanka travel specialist."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./blog-DhDQRch0.mjs");
var Route$3 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Journal · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Stories, guides and inspiration from Sri Lanka's finest travel curators."
		},
		{
			property: "og:title",
			content: "Sunny Ceylon Journal"
		},
		{
			property: "og:description",
			content: "Stories, guides and inspiration from Sri Lanka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./activities-BQD_yuHK.mjs");
var Route$2 = createFileRoute("/activities")({
	head: () => ({ meta: [
		{ title: "Activities · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "Whale watching, surfing, hot air balloons and more — signature Sri Lankan adventures."
		},
		{
			property: "og:title",
			content: "Sri Lanka Adventure Activities"
		},
		{
			property: "og:description",
			content: "Whale watching, surfing, hot air balloons and more."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CoZjdEkD.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us · Sunny Ceylon Travels" },
		{
			name: "description",
			content: "18 years of designing bespoke luxury journeys through Sri Lanka. Meet the family behind Sunny Ceylon Travels."
		},
		{
			property: "og:title",
			content: "About Sunny Ceylon Travels"
		},
		{
			property: "og:description",
			content: "18 years of designing bespoke luxury journeys through Sri Lanka."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DiOr7pKJ.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sunny Ceylon Travels · Luxury Journeys through Sri Lanka" },
		{
			name: "description",
			content: "Bespoke luxury tours across Sri Lanka's cultural triangle, tea country, southern beaches and wildlife parks. 18 years of craft, 12,000+ happy travellers."
		},
		{
			property: "og:title",
			content: "Sunny Ceylon Travels · Luxury Sri Lanka"
		},
		{
			property: "og:description",
			content: "Bespoke luxury tours across Sri Lanka crafted by local experts."
		},
		{
			property: "og:image",
			content: "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1600&q=80"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ToursRoute = Route$13.update({
	id: "/tours",
	path: "/tours",
	getParentRoute: () => Route$14
});
var TestimonialsRoute = Route$12.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$14
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$14
});
var PrivacyRoute = Route$10.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$14
});
var HotelsRoute = Route$9.update({
	id: "/hotels",
	path: "/hotels",
	getParentRoute: () => Route$14
});
var GalleryRoute = Route$8.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$14
});
var FleetRoute = Route$7.update({
	id: "/fleet",
	path: "/fleet",
	getParentRoute: () => Route$14
});
var FaqRoute = Route$6.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$14
});
var DestinationsRoute = Route$5.update({
	id: "/destinations",
	path: "/destinations",
	getParentRoute: () => Route$14
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$14
});
var BlogRoute = Route$3.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$14
});
var ActivitiesRoute = Route$2.update({
	id: "/activities",
	path: "/activities",
	getParentRoute: () => Route$14
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$14
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$14
	}),
	AboutRoute,
	ActivitiesRoute,
	BlogRoute,
	ContactRoute,
	DestinationsRoute,
	FaqRoute,
	FleetRoute,
	GalleryRoute,
	HotelsRoute,
	PrivacyRoute,
	TermsRoute,
	TestimonialsRoute,
	ToursRoute
};
var routeTree = Route$14._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
