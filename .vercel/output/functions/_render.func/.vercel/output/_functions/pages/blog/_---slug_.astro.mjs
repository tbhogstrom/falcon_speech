/* empty css                                    */
import { c as createComponent, d as createAstro, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B6f93CDr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BqwSPKGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="max-w-4xl mx-auto"> <div class="mb-8"> <img${addAttribute(post.data.image, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-64 md:h-96 object-cover rounded-lg"> </div> <div class="prose prose-lg max-w-none"> <h1 class="text-4xl font-bold text-gray-900 mb-4">${post.data.title}</h1> <div class="flex items-center text-gray-500 mb-8"> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")}> ${post.data.pubDate.toLocaleDateString()} </time> <span class="mx-2">•</span> <span>${post.data.author}</span> </div> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })}`;
}, "/Users/falcon/seo_python/falcon_speech_services/src/pages/blog/[...slug].astro", undefined);

const $$file = "/Users/falcon/seo_python/falcon_speech_services/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
