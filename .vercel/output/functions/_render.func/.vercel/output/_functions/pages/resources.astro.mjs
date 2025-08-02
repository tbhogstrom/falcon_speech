/* empty css                                 */
import { c as createComponent, d as createAstro, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent } from '../chunks/astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BqwSPKGZ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ResourceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResourceCard;
  const { title, description, type, downloadUrl, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md p-6"> <div class="flex items-center justify-between mb-4"> <h3 class="text-lg font-semibold text-gray-900">${title}</h3> <span class="px-3 py-1 text-sm rounded-full bg-primary-100 text-primary">${type}</span> </div> <p class="text-gray-600 mb-4">${description}</p> ${downloadUrl && renderTemplate`<a${addAttribute(downloadUrl, "href")} class="inline-flex items-center text-primary hover:text-primary-700" download> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
Download Resource
</a>`} ${link && renderTemplate`<a${addAttribute(link, "href")} class="inline-flex items-center text-primary hover:text-primary-700" target="_blank" rel="noopener noreferrer"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>
View Resource
</a>`} </div>`;
}, "/Users/falcon/seo_python/falcon_speech_services/src/components/ResourceCard.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const resources = [
    {
      title: "Speech Development Guide",
      description: "A comprehensive guide to speech milestones from birth to age 5",
      type: "PDF Guide",
      downloadUrl: "/resources/speech-development-guide.pdf"
    },
    {
      title: "Articulation Exercises",
      description: "Practice exercises for common speech sounds",
      type: "Worksheet",
      downloadUrl: "/resources/articulation-exercises.pdf"
    },
    {
      title: "Language Games",
      description: "Interactive games to support language development",
      type: "Online Tool",
      link: "/resources/games"
    }
  ];
  const categories = ["All", "Guides", "Worksheets", "Games", "Videos"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <div> <h1 class="text-3xl font-bold text-gray-900">Resource Library</h1> <p class="mt-2 text-gray-600">Access our collection of speech therapy resources and materials</p> </div> <div class="flex flex-wrap gap-4"> ${categories.map((category) => renderTemplate`<button class="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"> ${category} </button>`)} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${resources.map((resource) => renderTemplate`${renderComponent($$result2, "ResourceCard", $$ResourceCard, { ...resource })}`)} </div> </div> ` })} `;
}, "/Users/falcon/seo_python/falcon_speech_services/src/pages/resources/index.astro", undefined);

const $$file = "/Users/falcon/seo_python/falcon_speech_services/src/pages/resources/index.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
