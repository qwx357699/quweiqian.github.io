const baseConfig = require("./configs/config-base.js");
const fixedLearning = require("./configs/config-fixed-learning.js");
const es6YuanYifeng = require("./configs/config-es-ruanyifeng.js");
const interview = require("./configs/config-interview.js");
const particular = require("./configs/config-particular.js");


module.exports = (options, context) => {
	return {
		base: '/quweiqian/',
		title: '无间劫',
		head: [
			['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
			['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css' }],
		],
		description: 'Just playing around',

		plugins: [
			['vuepress-plugin-mermaidjs', { gantt: { barHeight: 40 } }],
			['@vuepress/active-header-links', {
				sidebarLinkSelector: '.sidebar-link',
				headerAnchorSelector: '.header-anchor'
			}],

		],
		themeConfig: {
			displayAllHeaders: false, // 默认值：false
			nav: [
				{ text: 'home', link: '/' },
				{ text: '基础', link: '/base/frontend-base-htmlcss-master/5/10' },
				{
					text: '固定学习', link: '/duyi/frontend-pre-htmlcss-master/01'
					// ariaLabel: 'context Menu',
					// items: [
					// 	{ text: 'HTML+CSS基础', link: '/duyi/frontend-base-htmlcss-master/1/1' },
					// 	{ text: 'HTML+CSS收官', link: '/duyi/frontend-pre-htmlcss-master/01' },
					// 	{ text: 'js收官', link: '/duyi/frontend-pre-javascript-master/01' },
					// 	{ text: 'frontendTraining', link: '/duyi/frontend-training-master/css3-manual' },
					// ]
				},
				{ text: '笔面试', link: '/interview/frontend-interview-html-master/1' },
				{
					text: '详细版', link: '/particular/',
					ariaLabel: 'context Menu',
					items: [
						{ text: 'ES6详细版', link: '/particular/frontend-es6-particular-master/1' },
					]
				},
				{ text: 'es6阮', link: '/es6/intro' },
			],
			sidebar: {
				...baseConfig,
				...fixedLearning,
				...es6YuanYifeng,
				...interview,
				...particular
			},

		},
		configureWebpack: {
			resolve: {
				alias: {
					'@alias': '/docs/imgs',
					'@ppts': '/docs/ppts'
				}
			}
		},
		extendMarkdown(md) {
			md.set({ html: true });
			md.use(require("markdown-it-katex"));
		}
	}
}


