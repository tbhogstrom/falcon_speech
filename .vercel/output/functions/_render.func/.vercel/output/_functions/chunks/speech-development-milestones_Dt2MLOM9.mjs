import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DPdDGyMd.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"speech-development-milestones-a-comprehensive-guide\">Speech Development Milestones: A Comprehensive Guide</h1>\n<p>Understanding your child’s speech development journey is crucial for early intervention and support. Here’s what to expect at different ages:</p>\n<h2 id=\"birth-to-3-months\">Birth to 3 Months</h2>\n<ul>\n<li>Startles at loud sounds</li>\n<li>Makes pleasure sounds (cooing)</li>\n<li>Cries differently for different needs</li>\n</ul>\n<h2 id=\"4-6-months\">4-6 Months</h2>\n<ul>\n<li>Follows sounds with eyes</li>\n<li>Responds to changes in tone of voice</li>\n<li>Makes speech-like babbling sounds</li>\n<li>Laughs and giggles</li>\n</ul>\n<h2 id=\"7-12-months\">7-12 Months</h2>\n<ul>\n<li>Understands “no-no”</li>\n<li>Responds to simple requests</li>\n<li>Babbles with inflection</li>\n<li>Uses gestures to communicate</li>\n</ul>\n<h2 id=\"1-2-years\">1-2 Years</h2>\n<ul>\n<li>Says more words every month</li>\n<li>Uses some one or two word questions</li>\n<li>Puts two words together</li>\n<li>Follows simple commands</li>\n</ul>\n<p>[Continue reading for more age groups…]</p>";

				const frontmatter = {"title":"Speech Development Milestones","pubDate":"2024-03-15T00:00:00.000Z","author":"Dr. Sarah Johnson","description":"Understanding key speech and language development milestones from birth to age 5. Learn what to expect and when to seek professional help.","image":"/images/speech-milestones.jpg"};
				const file = "/Users/falcon/seo_python/falcon_speech_services/src/content/blog/speech-development-milestones.md";
				const url = undefined;
				function rawContent() {
					return "\n# Speech Development Milestones: A Comprehensive Guide\n\nUnderstanding your child's speech development journey is crucial for early intervention and support. Here's what to expect at different ages:\n\n## Birth to 3 Months\n- Startles at loud sounds\n- Makes pleasure sounds (cooing)\n- Cries differently for different needs\n\n## 4-6 Months\n- Follows sounds with eyes\n- Responds to changes in tone of voice\n- Makes speech-like babbling sounds\n- Laughs and giggles\n\n## 7-12 Months\n- Understands \"no-no\"\n- Responds to simple requests\n- Babbles with inflection\n- Uses gestures to communicate\n\n## 1-2 Years\n- Says more words every month\n- Uses some one or two word questions\n- Puts two words together\n- Follows simple commands\n\n[Continue reading for more age groups...]";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"speech-development-milestones-a-comprehensive-guide","text":"Speech Development Milestones: A Comprehensive Guide"},{"depth":2,"slug":"birth-to-3-months","text":"Birth to 3 Months"},{"depth":2,"slug":"4-6-months","text":"4-6 Months"},{"depth":2,"slug":"7-12-months","text":"7-12 Months"},{"depth":2,"slug":"1-2-years","text":"1-2 Years"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
