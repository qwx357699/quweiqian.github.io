module.exports = {
	"/duyi/": [
		{
			title: '固定学习',
			// path: 'frontend-base-htmlcss-master/1/1',
			collapsable: true,
			sidebarDepth: 2,
			children: [
				{
					title: 'HTML+CSS收官',   // 必要的
					// path: 'frontend-pre-htmlcss-master/01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
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
					sidebarDepth: 2,    // 可选的, 默认值是 1
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
						{
							title: 'WebAPI',   // 必要的
							path: 'frontend-pre-javascript-master/20.md',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
							collapsable: true, // 可选的, 默认值是 true,
							sidebarDepth: 2,    // 可选的, 默认值是 1
						},
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
					sidebarDepth: 2,    // 可选的, 默认值是 1
					children: [
						'frontend-training-master/css3-manual',
						'frontend-training-master/html5-manual',
					]
				},
				{
					title: 'JavaScript 语言提升（ES6+）',   // 必要的
					// path: 'frontend-training-master/es6-01',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
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
					title: '网络基本概念',
					collapsable: true,
					sidebarDepth: 2,
					children: ['frontend-training-master/network']
				},
				{
					title: 'Git',   // 必要的
					// path: 'frontend-training-master/git',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
					children: [
						'frontend-training-master/git',
						'frontend-training-master/gitDemo2'
					]
				},
				{
					title: '常用三方库',   // 必要的
					path: 'frontend-training-master/common-libs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
				},
				{
					title: '工程化',   // 必要的
					// path: 'frontend-training-master/commonjs',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
					children: [
						'frontend-training-master/commonjs',
						'frontend-training-master/es-module',
						'frontend-training-master/npm',
						'frontend-training-master/less',
						{
							title: '构建工具的使用',
							path: 'frontend-training-master/buildtools',
							sidebarDepth: 2,
						},
						'frontend-training-master/movie',
						{
							title: 'Windows系统下安装 nvm',
							path: 'frontend-training-master/nvm1',
							sidebarDepth: 2,
						},
						{
							title: 'Mac系统下安装nvm',
							path: 'frontend-training-master/nvm2',
							sidebarDepth: 2,
						},
					]
				},
				{
					title: 'vue入门到实践',   // 必要的
					// path: 'frontend-training-master/vue1',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
					collapsable: true, // 可选的, 默认值是 true,
					sidebarDepth: 2,    // 可选的, 默认值是 1
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
						'frontend-training-master/vue11',
						'frontend-training-master/vue12',
						'frontend-training-master/vue13',
						'frontend-training-master/vue14',
						'frontend-training-master/vue15',
						'frontend-training-master/vue16',
						'frontend-training-master/vue17',
						'frontend-training-master/vue18',
						'frontend-training-master/vue19',
						'frontend-training-master/vue20',
						'frontend-training-master/vue21',
						'frontend-training-master/vue22',
						'frontend-training-master/vue23',
						'frontend-training-master/vue24',
						'frontend-training-master/vue25',
						'frontend-training-master/vue26',
						'frontend-training-master/vue27',
						'frontend-training-master/vue28',
					]
				},
			],
		}
	]
}