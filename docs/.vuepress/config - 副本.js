module.exports = {
	base: '/quweiqian/',
	title: '目录',
	description: 'Just playing around',
	plugins: ['@vuepress/active-header-links', {
		sidebarLinkSelector: '.sidebar-link',
		headerAnchorSelector: '.header-anchor'
	}],
	themeConfig: {
		displayAllHeaders: true, // 默认值：false
		nav: [
			{ text: 'Home', link: '/' },
			{ text: '网络', link: '/duyi/frontend-training-master/network' },
			{ text: 'es6阮一峰', link: '/es6/intro' },
		],
		sidebar: [
			{
				title: '2020 前端开发 HTML+CSS 宝典',
				path: '/duyi/frontend-base-htmlcss-master/1/1',
				collapsable: true,
				sidebarDepth: 1,
				children: [
					{
						title: '概述',
						path: '/duyi/frontend-base-htmlcss-master/1/1',
						collapsable: false,
						sidebarDepth: 1,
						children: [
							'/duyi/frontend-base-htmlcss-master/1/1',
							'/duyi/frontend-base-htmlcss-master/1/2',
							'/duyi/frontend-base-htmlcss-master/1/3',
						]
					},
					{
						title: 'HTML核心',
						path: '/duyi/frontend-base-htmlcss-master/2/1',
						collapsable: false,
						sidebarDepth: 1,
						children: [
							'/duyi/frontend-base-htmlcss-master/2/1',
							'/duyi/frontend-base-htmlcss-master/2/2',
							'/duyi/frontend-base-htmlcss-master/2/3',
							'/duyi/frontend-base-htmlcss-master/2/4',
							'/duyi/frontend-base-htmlcss-master/2/5',
							'/duyi/frontend-base-htmlcss-master/2/6',
							'/duyi/frontend-base-htmlcss-master/2/7',
							'/duyi/frontend-base-htmlcss-master/2/8',
							'/duyi/frontend-base-htmlcss-master/2/9',
							'/duyi/frontend-base-htmlcss-master/2/10',
							'/duyi/frontend-base-htmlcss-master/2/11',
						]
					},
					{
						title: 'CSS基础',
						path: '/duyi/frontend-base-htmlcss-master/3/1',
						collapsable: false,
						sidebarDepth: 1,
						children: [
							'/duyi/frontend-base-htmlcss-master/3/1',
							'/duyi/frontend-base-htmlcss-master/3/2',
							'/duyi/frontend-base-htmlcss-master/3/3',
							'/duyi/frontend-base-htmlcss-master/3/4',
							'/duyi/frontend-base-htmlcss-master/3/5',
							'/duyi/frontend-base-htmlcss-master/3/6',
							'/duyi/frontend-base-htmlcss-master/3/7',
							'/duyi/frontend-base-htmlcss-master/3/8',
							'/duyi/frontend-base-htmlcss-master/3/9',
							'/duyi/frontend-base-htmlcss-master/3/10',
							'/duyi/frontend-base-htmlcss-master/3/11',
							'/duyi/frontend-base-htmlcss-master/3/12',
							'/duyi/frontend-base-htmlcss-master/3/13',
							'/duyi/frontend-base-htmlcss-master/3/14',
							'/duyi/frontend-base-htmlcss-master/3/15',
						]
					},
					{
						title: 'HTML进阶',
						path: '/duyi/frontend-base-htmlcss-master/4/1',
						collapsable: false,
						sidebarDepth: 1,
						children: [
							'/duyi/frontend-base-htmlcss-master/4/1',
							'/duyi/frontend-base-htmlcss-master/4/2',
							'/duyi/frontend-base-htmlcss-master/4/3',
							'/duyi/frontend-base-htmlcss-master/4/4',
							'/duyi/frontend-base-htmlcss-master/4/5',
							'/duyi/frontend-base-htmlcss-master/4/6',
						]
					},
					{
						title: 'CSS进阶',
						path: '/duyi/frontend-base-htmlcss-master/3/1',
						collapsable: false,
						sidebarDepth: 1,
						children: [
							'/duyi/frontend-base-htmlcss-master/5/1',
							'/duyi/frontend-base-htmlcss-master/5/2',
							'/duyi/frontend-base-htmlcss-master/5/3',
							'/duyi/frontend-base-htmlcss-master/5/4',
							'/duyi/frontend-base-htmlcss-master/5/5',
							'/duyi/frontend-base-htmlcss-master/5/6',
							'/duyi/frontend-base-htmlcss-master/5/7',
							'/duyi/frontend-base-htmlcss-master/5/8',
							'/duyi/frontend-base-htmlcss-master/5/9',
							'/duyi/frontend-base-htmlcss-master/5/10',
							'/duyi/frontend-base-htmlcss-master/5/11',
							'/duyi/frontend-base-htmlcss-master/5/12',
							'/duyi/frontend-base-htmlcss-master/5/13',
							'/duyi/frontend-base-htmlcss-master/5/14',
							'/duyi/frontend-base-htmlcss-master/5/15',
						]
					},
				]
			},
			{
				title: 'HTML+CSS收官',   // 必要的
				path: '/duyi/frontend-pre-htmlcss-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-pre-htmlcss-master/01',
					'/duyi/frontend-pre-htmlcss-master/02',
					'/duyi/frontend-pre-htmlcss-master/03',
					'/duyi/frontend-pre-htmlcss-master/04',
					'/duyi/frontend-pre-htmlcss-master/05',
				]
			},
			{
				title: 'js收官',   // 必要的
				path: '/duyi/frontend-pre-javascript-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-pre-javascript-master/01.md',
					'/duyi/frontend-pre-javascript-master/02.md',
					'/duyi/frontend-pre-javascript-master/03.md',
					'/duyi/frontend-pre-javascript-master/04.md',
					'/duyi/frontend-pre-javascript-master/05.md',
					'/duyi/frontend-pre-javascript-master/07.md',
					'/duyi/frontend-pre-javascript-master/09.md',
					'/duyi/frontend-pre-javascript-master/10.md',
					'/duyi/frontend-pre-javascript-master/12.md',
					'/duyi/frontend-pre-javascript-master/13.md',
					'/duyi/frontend-pre-javascript-master/14.md',
					'/duyi/frontend-pre-javascript-master/15.md',
					'/duyi/frontend-pre-javascript-master/16.md',
					'/duyi/frontend-pre-javascript-master/20.md',
					'/duyi/frontend-pre-javascript-master/28.md',
					'/duyi/frontend-pre-javascript-master/29.md',
					'/duyi/frontend-pre-javascript-master/30.md',
					'/duyi/frontend-pre-javascript-master/31.md'
				]
			},
			{
				title: 'HTML+CSS 语言提升（H5+CSS3）',   // 必要的
				path: '/duyi/frontend-training-master/css3-manual',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-training-master/css3-manual',
					'/duyi/frontend-training-master/html5-manual',
				]
			},
			{
				title: 'JavaScript 语言提升（ES6+）',   // 必要的
				path: '/duyi/frontend-training-master/es6-01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-training-master/es6-01',
					'/duyi/frontend-training-master/es6-02',
					'/duyi/frontend-training-master/es6-03',
					'/duyi/frontend-training-master/es6-04',
					'/duyi/frontend-training-master/es6-05',
					'/duyi/frontend-training-master/es6-06',
					'/duyi/frontend-training-master/es6-07',
					'/duyi/frontend-training-master/es6-08',
				]
			},
			{
				title: '网络',   // 必要的
				path: '/duyi/frontend-training-master/network',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
			},
			{
				title: 'Git',   // 必要的
				path: '/duyi/frontend-training-master/git',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-training-master/git',
					'/duyi/frontend-training-master/gitDemo2'
				]
			},
			{
				title: '常用三方库',   // 必要的
				path: '/duyi/frontend-training-master/common-libs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
			},
			{
				title: '工程化',   // 必要的
				path: '/duyi/frontend-training-master/commonjs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1,    // 可选的, 默认值是 1
				children: [
					'/duyi/frontend-training-master/commonjs',
					'/duyi/frontend-training-master/es-module',
					'/duyi/frontend-training-master/npm',
					'/duyi/frontend-training-master/less',
					'/duyi/frontend-training-master/buildtools',
					'/duyi/frontend-training-master/movie',
				]
			},
			{
				title: 'es6阮一峰',   // 必要的
				path: '/es6/intro',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 0,    // 可选的, 默认值是 1
				children: [
					'/es6/intro',
					'/es6/let',
					'/es6/destructuring',
					'/es6/string',
					'/es6/string-methods',
					'/es6/regex',
					'/es6/number',
					'/es6/function',
					'/es6/array',
					'/es6/object',
					'/es6/object-methods',
					'/es6/operator',
					'/es6/symbol',
					'/es6/set-map',
					'/es6/proxy',
					'/es6/reflect',
					'/es6/promise',
					'/es6/iterator',
					'/es6/generator',
					'/es6/generator-async',
					'/es6/async',
					'/es6/class',
					'/es6/class-extends',
					'/es6/module',
					'/es6/module-loader',
					'/es6/style',
					'/es6/spec',
					'/es6/async-iterator',
					'/es6/arraybuffer',
					'/es6/proposals',
					'/es6/decorator',
					'/es6/reference',
					'/es6/acknowledgment',
					'/es6/fp',
					'/es6/mixin',
					'/es6/simd',
				]
			}
		]
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@alias': 'path/to/some/dir'
			}
		}
	}
}