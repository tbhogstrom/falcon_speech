import { c as createComponent, d as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, a as renderComponent, f as renderSlot } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro();
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/who-we-are" },
    { name: "Treatment Areas", path: "/treatment-areas" },
    { name: "Areas of Service", path: "/areas-of-service" },
    { name: "Policies", path: "/policies" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact & Screening", path: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white shadow-lg"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex"> <div class="flex-shrink-0 flex items-center"> <a href="/" class="text-2xl font-bold text-primary">Falcon Speech</a> </div> </div> <!-- Mobile menu button --> <div class="flex items-center sm:hidden"> <button type="button" class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-controls="mobile-menu" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Desktop menu --> <div class="hidden sm:flex sm:space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentPath === item.path ? "border-primary text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`, "class")}> ${item.name} </a>`)} </div> </div> </div> <!-- Mobile menu --> <div class="sm:hidden hidden" id="mobile-menu"> <div class="pt-2 pb-3 space-y-1"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${currentPath === item.path ? "bg-primary-50 border-primary text-primary" : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"}`, "class")}> ${item.name} </a>`)} </div> </div> </nav> `;
}, "/Users/falcon/seo_python/falcon_speech_services/src/components/Nav.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Professional speech therapy services for all ages" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title} | Falcon Speech</title>${renderHead()}</head> <body class="min-h-screen bg-gray-50"> ${renderComponent($$result, "Nav", $$Nav, {})} <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/falcon/seo_python/falcon_speech_services/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
