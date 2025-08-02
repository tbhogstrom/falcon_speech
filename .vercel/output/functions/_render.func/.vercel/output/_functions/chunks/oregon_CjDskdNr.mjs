import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"state":"Oregon","description":"Expert virtual speech therapy services throughout Oregon. In the Hood River Gorge area, we also offer in-home evaluations and hybrid therapy sessions.","gorgeServices":{"cities":["Hood River (including Odell & Parkdale)","Cascade Locks (including Bonneville)"],"features":["In-home evaluations","Hybrid therapy sessions (alternating in-home and virtual)","Natural environment assessments"]},"services":["Speech Sound Disorders","Language Delays & Disorders","Stuttering/Fluency Therapy","Voice Therapy","Social Communication","AAC Consultations","Dyslexia Assessments"],"virtualPlatforms":["Zoom for Healthcare","Microsoft Teams","Doxy.me"],"coverage":["All major insurance providers","Medicare","Oregon Health Plan"]};
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
