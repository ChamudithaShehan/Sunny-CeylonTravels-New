import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Clock, f as Phone, h as Mail, m as MapPin } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn, i as PageTransition, n as FadeIn, r as PageHero } from "./primitives-CIXPsD8P.mjs";
import { t as Button } from "./button-CP5hyYwr.mjs";
import { t as Input } from "./input-CcFuZBEl.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CuEbK4il.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransition, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Let's design your journey.",
		subtitle: "Send us a note or call our Colombo studio — we reply within one business day.",
		image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=80",
		breadcrumbs: [{ label: "Contact" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FadeIn, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.28em] text-primary font-semibold mb-3",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl font-bold",
					children: "We'd love to hear from you."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Every journey begins with a conversation. Share a few details and a specialist will craft your bespoke itinerary."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-5",
					children: [
						{
							icon: Phone,
							label: "Phone",
							value: "+94 11 234 5678"
						},
						{
							icon: Mail,
							label: "Email",
							value: "hello@sunnyceylon.travel"
						},
						{
							icon: MapPin,
							label: "Studio",
							value: "42 Galle Face Terrace, Colombo 03"
						},
						{
							icon: Clock,
							label: "Hours",
							value: "Mon–Sat · 9:00 – 19:00 IST"
						}
					].map(({ icon: Icon, label, value }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: value
						})] })]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 aspect-[16/10] rounded-2xl overflow-hidden border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Colombo map",
						src: "https://www.openstreetmap.org/export/embed.html?bbox=79.8,6.9,79.87,6.94&layer=mapnik",
						className: "w-full h-full",
						loading: "lazy"
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FadeIn, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						toast.success("Thank you! We'll be in touch within one business day.");
						e.target.reset();
					},
					className: "rounded-3xl bg-card border p-8 md:p-10 shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "fn",
									children: "First name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "fn",
									required: true,
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ln",
									children: "Last name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ln",
									required: true,
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "em",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "em",
									type: "email",
									required: true,
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ph",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ph",
									type: "tel",
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "dst",
										children: "Dream destination"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "dst",
										placeholder: "Sigiriya, Ella, Galle…",
										className: "mt-2"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "tr",
									children: "Travellers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "tr",
									type: "number",
									min: 1,
									defaultValue: 2,
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "dt",
									children: "Approx dates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "dt",
									placeholder: "Mar 2026",
									className: "mt-2"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "msg",
										children: "Tell us about your dream trip"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "msg",
										rows: 5,
										className: "mt-2"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-6 w-full rounded-full bg-secondary hover:bg-secondary/90 h-12",
							children: "Send enquiry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs text-muted-foreground text-center",
							children: "By submitting you agree to our privacy policy."
						})
					]
				})
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
