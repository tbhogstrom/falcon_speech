/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BqwSPKGZ.mjs';
import { g as getCollection } from '../chunks/_astro_content_ByEU0dh0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const locations = await getCollection("locations");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Schedule an Appointment" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900">Schedule an Appointment</h1> <p class="mt-4 text-lg text-gray-600">Book your speech therapy session</p> </div> <div class="bg-white shadow-lg rounded-lg overflow-hidden"> <div class="p-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Choose Your Location</h2> <div class="space-y-4"> ${locations.map((location) => renderTemplate`<div class="border rounded-lg p-4 hover:border-primary cursor-pointer transition-colors"> <h3 class="font-medium text-gray-900">${location.data.city}, ${location.data.state}</h3> <p class="text-sm text-gray-500 mt-1">${location.data.contact.address}</p> </div>`)} </div> </div> <div> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Select Date & Time</h2> <div class="calendar-widget bg-gray-50 p-4 rounded-lg"> <!-- Calendar will be injected here by the scheduling widget --> <div id="calendar-container"></div> </div> </div> </div> <div class="mt-8 pt-8 border-t"> <h2 class="text-2xl font-semibold text-gray-900 mb-4">Appointment Details</h2> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"> </div> </div> <div> <label for="service" class="block text-sm font-medium text-gray-700">Service Type</label> <select id="service" name="service" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"> <option value="">Select a service</option> <option value="initial">Initial Consultation</option> <option value="speech">Speech Therapy Session</option> <option value="evaluation">Speech Evaluation</option> </select> </div> <div> <label for="notes" class="block text-sm font-medium text-gray-700">Additional Notes</label> <textarea id="notes" name="notes" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea> </div> <div class="flex justify-end"> <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
Schedule Appointment
</button> </div> </form> </div> </div> </div> </div> ` })} `;
}, "/Users/falcon/seo_python/falcon_speech_services/src/pages/schedule/index.astro", undefined);

const $$file = "/Users/falcon/seo_python/falcon_speech_services/src/pages/schedule/index.astro";
const $$url = "/schedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
