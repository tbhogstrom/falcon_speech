import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"state":"Alaska","description":"Comprehensive virtual speech therapy services available across Alaska. Our remote therapy solutions bring professional speech services to both urban and rural communities throughout the state.","services":["Speech Sound Disorders","Language Development & Delays","Stuttering/Fluency Therapy","Voice Therapy","Social Communication","AAC Consultations","Dyslexia Assessments"],"virtualPlatforms":["Zoom for Healthcare","Microsoft Teams","Doxy.me"],"coverage":["All major insurance providers","Medicare","Medicaid","Denali KidCare"]};
				const file = "/Users/falcon/seo_python/falcon_speech_services/src/content/locations/alaska.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
