import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"state":"Oregon","description":"Expert virtual speech therapy services throughout Oregon. Our licensed therapists deliver personalized care using secure telehealth platforms, making professional speech therapy accessible from anywhere in the state.","services":["Speech Sound Disorders","Language Delays","Stuttering Therapy","Voice Therapy","Accent Modification","Social Communication"],"virtualPlatforms":["Zoom for Healthcare","Microsoft Teams","Doxy.me"],"coverage":["All major insurance providers","Medicare","Oregon Health Plan"],"contact":{"phone":"(503) 555-0123","email":"oregon@falconspeech.com"}};
				const file = "/Users/falcon/seo_python/falcon_speech_services/src/content/locations/oregon.md";
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
