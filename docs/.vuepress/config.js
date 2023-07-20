module.exports = (options, context) => {
	return {
		base: '/quweiqian/',
		title: '目录',
		description: 'Just playing around',
		plugins: [
			'mermaidjs',
			['@vuepress/active-header-links', {
				sidebarLinkSelector: '.sidebar-link',
				headerAnchorSelector: '.header-anchor'
			}],
			
		],
		themeConfig: {
			displayAllHeaders: true, // 默认值：false
			nav: [
				{ text: 'home', link: '/' },
				{
					text: 'duyi', link: '/duyi/frontend-base-htmlcss-master/1/1'
					// ariaLabel: 'context Menu',
					// items: [
					// 	{ text: 'HTML+CSS基础', link: '/duyi/frontend-base-htmlcss-master/1/1' },
					// 	{ text: 'HTML+CSS收官', link: '/duyi/frontend-pre-htmlcss-master/01' },
					// 	{ text: 'js收官', link: '/duyi/frontend-pre-javascript-master/01' },
					// 	{ text: 'frontendTraining', link: '/duyi/frontend-training-master/css3-manual' },
					// ]
				},
				{ text: 'es6阮', link: '/es6/intro' },
			],
			sidebar: {
				"/duyi/": [
					{
						title: '2020 前端开发 HTML+CSS 宝典',
						// path: 'frontend-base-htmlcss-master/1/1',
						collapsable: true,
						sidebarDepth: 1,
						children: [
							{
								title: '概述',
								path: 'frontend-base-htmlcss-master/1/1',
								collapsable: false,
								sidebarDepth: 1,
								children: [
									'frontend-base-htmlcss-master/1/1',
									'frontend-base-htmlcss-master/1/2',
									'frontend-base-htmlcss-master/1/3',
								]
							},
							{
								title: 'HTML核心',
								path: 'frontend-base-htmlcss-master/2/1',
								collapsable: false,
								sidebarDepth: 1,
								children: [
									'frontend-base-htmlcss-master/2/1',
									'frontend-base-htmlcss-master/2/2',
									'frontend-base-htmlcss-master/2/3',
									'frontend-base-htmlcss-master/2/4',
									'frontend-base-htmlcss-master/2/5',
									'frontend-base-htmlcss-master/2/6',
									'frontend-base-htmlcss-master/2/7',
									'frontend-base-htmlcss-master/2/8',
									'frontend-base-htmlcss-master/2/9',
									'frontend-base-htmlcss-master/2/10',
									'frontend-base-htmlcss-master/2/11',
								]
							},
							{
								title: 'CSS基础',
								path: 'frontend-base-htmlcss-master/3/1',
								collapsable: false,
								sidebarDepth: 1,
								children: [
									'frontend-base-htmlcss-master/3/1',
									'frontend-base-htmlcss-master/3/2',
									'frontend-base-htmlcss-master/3/3',
									'frontend-base-htmlcss-master/3/4',
									'frontend-base-htmlcss-master/3/5',
									'frontend-base-htmlcss-master/3/6',
									'frontend-base-htmlcss-master/3/7',
									'frontend-base-htmlcss-master/3/8',
									'frontend-base-htmlcss-master/3/9',
									'frontend-base-htmlcss-master/3/10',
									'frontend-base-htmlcss-master/3/11',
									'frontend-base-htmlcss-master/3/12',
									'frontend-base-htmlcss-master/3/13',
									'frontend-base-htmlcss-master/3/14',
									'frontend-base-htmlcss-master/3/15',
								]
							},
							{
								title: 'HTML进阶',
								path: 'frontend-base-htmlcss-master/4/1',
								collapsable: false,
								sidebarDepth: 1,
								children: [
									'frontend-base-htmlcss-master/4/1',
									'frontend-base-htmlcss-master/4/2',
									'frontend-base-htmlcss-master/4/3',
									'frontend-base-htmlcss-master/4/4',
									'frontend-base-htmlcss-master/4/5',
									'frontend-base-htmlcss-master/4/6',
								]
							},
							{
								title: 'CSS进阶',
								path: 'frontend-base-htmlcss-master/3/1',
								collapsable: false,
								sidebarDepth: 1,
								children: [
									'frontend-base-htmlcss-master/5/1',
									'frontend-base-htmlcss-master/5/2',
									'frontend-base-htmlcss-master/5/3',
									'frontend-base-htmlcss-master/5/4',
									'frontend-base-htmlcss-master/5/5',
									'frontend-base-htmlcss-master/5/6',
									'frontend-base-htmlcss-master/5/7',
									'frontend-base-htmlcss-master/5/8',
									'frontend-base-htmlcss-master/5/9',
									'frontend-base-htmlcss-master/5/10',
									'frontend-base-htmlcss-master/5/11',
									'frontend-base-htmlcss-master/5/12',
									'frontend-base-htmlcss-master/5/13',
									'frontend-base-htmlcss-master/5/14',
									'frontend-base-htmlcss-master/5/15',
								]
							},
						]
					},
					{
						title: 'HTML+CSS收官',   // 必要的
						// path: 'frontend-pre-htmlcss-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-pre-htmlcss-master/01',
							'frontend-pre-htmlcss-master/02',
							'frontend-pre-htmlcss-master/03',
							'frontend-pre-htmlcss-master/04',
							'frontend-pre-htmlcss-master/05',
						]
					},
					{
						title: 'js收官',   // 必要的
						// path: 'frontend-pre-javascript-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-pre-javascript-master/01.md',
							'frontend-pre-javascript-master/02.md',
							'frontend-pre-javascript-master/03.md',
							'frontend-pre-javascript-master/04.md',
							'frontend-pre-javascript-master/05.md',
							'frontend-pre-javascript-master/07.md',
							'frontend-pre-javascript-master/09.md',
							'frontend-pre-javascript-master/10.md',
							'frontend-pre-javascript-master/12.md',
							'frontend-pre-javascript-master/13.md',
							'frontend-pre-javascript-master/14.md',
							'frontend-pre-javascript-master/15.md',
							'frontend-pre-javascript-master/16.md',
							'frontend-pre-javascript-master/20.md',
							'frontend-pre-javascript-master/28.md',
							'frontend-pre-javascript-master/29.md',
							'frontend-pre-javascript-master/30.md',
							'frontend-pre-javascript-master/31.md'
						]
					},
					{
						title: 'HTML+CSS 语言提升（H5+CSS3）',   // 必要的
						// path: 'frontend-training-master/css3-manual',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-training-master/css3-manual',
							'frontend-training-master/html5-manual',
						]
					},
					{
						title: 'JavaScript 语言提升（ES6+）',   // 必要的
						// path: 'frontend-training-master/es6-01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-training-master/es6-01',
							'frontend-training-master/es6-02',
							'frontend-training-master/es6-03',
							'frontend-training-master/es6-04',
							'frontend-training-master/es6-05',
							'frontend-training-master/es6-06',
							'frontend-training-master/es6-07',
							'frontend-training-master/es6-08',
						]
					},
					{
						title: '网络',   // 必要的
						path: 'frontend-training-master/network',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
					},
					{
						title: 'Git',   // 必要的
						// path: 'frontend-training-master/git',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: false, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-training-master/git',
							'frontend-training-master/gitDemo2'
						]
					},
					{
						title: '常用三方库',   // 必要的
						path: 'frontend-training-master/common-libs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: false, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
					},
					{
						title: '工程化',   // 必要的
						// path: 'frontend-training-master/commonjs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-training-master/commonjs',
							'frontend-training-master/es-module',
							'frontend-training-master/npm',
							'frontend-training-master/less',
							{
								title: '构建工具的使用', 
								path:'frontend-training-master/buildtools',
								sidebarDepth:3
							},
							'frontend-training-master/movie',
						]
					},
					{
						title: 'vue入门到实践',   // 必要的
						// path: 'frontend-training-master/vue1',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
						collapsable: true, // 可选的, 默认值是 true,
						sidebarDepth: 1,    // 可选的, 默认值是 1
						children: [
							'frontend-training-master/vue1',
							'frontend-training-master/vue2',
							'frontend-training-master/vue3',
							'frontend-training-master/vue4',
							'frontend-training-master/vue5',
							'frontend-training-master/vue6',
							'frontend-training-master/vue7',
							'frontend-training-master/vue8',
							'frontend-training-master/vue9',
							'frontend-training-master/vue10',
						]
					},
				],

				"/es6/": [{
					title: 'es6阮一峰',   // 必要的
					path: 'intro',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 0,    // 可选的, 默认值是 1
					children: [
						'intro',
						'let',
						'destructuring',
						'string',
						'string-methods',
						'regex',
						'number',
						'function',
						'array',
						'object',
						'object-methods',
						'operator',
						'symbol',
						'set-map',
						'proxy',
						'reflect',
						'promise',
						'iterator',
						'generator',
						'generator-async',
						'async',
						'class',
						'class-extends',
						'module',
						'module-loader',
						'style',
						'spec',
						'async-iterator',
						'arraybuffer',
						'proposals',
						'decorator',
						'reference',
						'acknowledgment',
						'fp',
						'mixin',
						'simd',
					]
				}]
			},
			// [
			// 	{
			// 		title: 'HTML+CSS收官',   // 必要的
			// 		path: '/duyi/frontend-pre-htmlcss-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
			// 		collapsable: false, // 可选的, 默认值是 true,
			// 		sidebarDepth: 1,    // 可选的, 默认值是 1
			// 		children: [
			// 			'/duyi/frontend-pre-htmlcss-master/01',
			// 			'/duyi/frontend-pre-htmlcss-master/02',
			// 		]
			// 	},

			// 	{
			// 		title: 'es6阮一峰',   // 必要的
			// 		path: '/es6/intro',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
			// 		collapsable: false, // 可选的, 默认值是 true,
			// 		sidebarDepth: 0,    // 可选的, 默认值是 1
			// 		children: [
			// 			'/es6/intro',
			// 			'/es6/let',
			// 		]
			// 	}
			// ]
		},
		configureWebpack: {
			resolve: {
				alias: {
					'@alias': '/docs/imgs'
				}
			}
		},
	}
}


