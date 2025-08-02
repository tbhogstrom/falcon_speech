import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"state":"Washington","description":"Professional virtual speech therapy services available throughout Washington state. In the Hood River Gorge area, we also offer in-home evaluations and hybrid therapy sessions.","gorgeServices":{"cities":["White Salmon (including Bingen & Lyle)","Stevenson (including Carson)","Trout Lake (including Glenwood)"],"features":["In-home evaluations","Hybrid therapy sessions (alternating in-home and virtual)","Natural environment assessments"]},"services":["Speech Sound Disorders","Language Development & Delays","Stuttering/Fluency Therapy","Voice Therapy","Social Communication","AAC Consultations","Dyslexia Assessments"],"virtualPlatforms":["Zoom for Healthcare","Microsoft Teams","Doxy.me"],"coverage":["All major insurance providers","Medicare","Medicaid"]};
				const file = "/Users/falcon/seo_python/falcon_speech_services/src/content/locations/washington.md";
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
