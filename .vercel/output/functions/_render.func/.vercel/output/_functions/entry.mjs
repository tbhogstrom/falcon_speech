import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BnTEHTrU.mjs';
import { manifest } from './manifest_BQYYkpsm.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/areas-of-service.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/faq.astro.mjs');
const _page8 = () => import('./pages/locations/cascade-locks.astro.mjs');
const _page9 = () => import('./pages/locations/hood-river.astro.mjs');
const _page10 = () => import('./pages/locations/service-areas.astro.mjs');
const _page11 = () => import('./pages/locations/stevenson.astro.mjs');
const _page12 = () => import('./pages/locations/trout-lake.astro.mjs');
const _page13 = () => import('./pages/locations/white-salmon.astro.mjs');
const _page14 = () => import('./pages/locations.astro.mjs');
const _page15 = () => import('./pages/policies/cancellation.astro.mjs');
const _page16 = () => import('./pages/policies/rates.astro.mjs');
const _page17 = () => import('./pages/policies.astro.mjs');
const _page18 = () => import('./pages/resources.astro.mjs');
const _page19 = () => import('./pages/schedule.astro.mjs');
const _page20 = () => import('./pages/screening.astro.mjs');
const _page21 = () => import('./pages/services/remote/_state_.astro.mjs');
const _page22 = () => import('./pages/services.astro.mjs');
const _page23 = () => import('./pages/treatment-areas/aac-nonspeaking.astro.mjs');
const _page24 = () => import('./pages/treatment-areas/early-intervention.astro.mjs');
const _page25 = () => import('./pages/treatment-areas/language-disorders.astro.mjs');
const _page26 = () => import('./pages/treatment-areas/neurodiversity-affirming.astro.mjs');
const _page27 = () => import('./pages/treatment-areas/speech-sound-disorders.astro.mjs');
const _page28 = () => import('./pages/treatment-areas/stuttering-fluency.astro.mjs');
const _page29 = () => import('./pages/treatment-areas.astro.mjs');
const _page30 = () => import('./pages/who-we-are.astro.mjs');
const _page31 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/index.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/areas-of-service/index.astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/contact/index.astro", _page6],
    ["src/pages/faq/index.astro", _page7],
    ["src/pages/locations/cascade-locks.astro", _page8],
    ["src/pages/locations/hood-river.astro", _page9],
    ["src/pages/locations/service-areas.astro", _page10],
    ["src/pages/locations/stevenson.astro", _page11],
    ["src/pages/locations/trout-lake.astro", _page12],
    ["src/pages/locations/white-salmon.astro", _page13],
    ["src/pages/locations/index.astro", _page14],
    ["src/pages/policies/cancellation.astro", _page15],
    ["src/pages/policies/rates.astro", _page16],
    ["src/pages/policies/index.astro", _page17],
    ["src/pages/resources/index.astro", _page18],
    ["src/pages/schedule/index.astro", _page19],
    ["src/pages/screening/index.astro", _page20],
    ["src/pages/services/remote/[state].astro", _page21],
    ["src/pages/services/index.astro", _page22],
    ["src/pages/treatment-areas/aac-nonspeaking.astro", _page23],
    ["src/pages/treatment-areas/early-intervention.astro", _page24],
    ["src/pages/treatment-areas/language-disorders.astro", _page25],
    ["src/pages/treatment-areas/neurodiversity-affirming.astro", _page26],
    ["src/pages/treatment-areas/speech-sound-disorders.astro", _page27],
    ["src/pages/treatment-areas/stuttering-fluency.astro", _page28],
    ["src/pages/treatment-areas/index.astro", _page29],
    ["src/pages/who-we-are/index.astro", _page30],
    ["src/pages/index.astro", _page31]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "eea31f31-35b6-4037-ae33-cc685f2c937a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
