/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_B6f93CDr.mjs';
import { $ as $$Layout } from '../chunks/Layout_BqwSPKGZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <div> <h1 class="text-3xl font-bold text-gray-900">Speech Therapy Blog</h1> <p class="mt-2 text-gray-600">Expert insights and tips for speech development</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <div class="flex items-center text-sm text-gray-500 mb-2"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${post.data.pubDate.toLocaleDateString()} </time> <span class="mx-2">•</span> <span>${post.data.author}</span> </div> <h2 class="text-xl font-semibold text-gray-900 mb-2"> <a${addAttribute(`/blog/${post.slug}`, "href")} class="hover:text-primary"> ${post.data.title} </a> </h2> <p class="text-gray-600 line-clamp-3">${post.data.description}</p> </div> </article>`)} </div> </div> ` })}`;
}, "/Users/falcon/seo_python/falcon_speech_services/src/pages/blog/index.astro", undefined);

const $$file = "/Users/falcon/seo_python/falcon_speech_services/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
