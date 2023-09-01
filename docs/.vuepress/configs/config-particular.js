const es6Particular = require("./particular/es6.js");
module.exports = {
	"/particular/": [
		{
			title: '详细版',
			collapsable: true,
			sidebarDepth: 2,
			children: [
				{ ...es6Particular }
			],
		}
	]
}