const es6Particular = require("./particular/es6.js");
const webPackParticular = require("./particular/webpack");
module.exports = {
	"/particular/": [
		{
			title: '详细版',
			collapsable: true,
			sidebarDepth: 2,
			children: [
				{ ...es6Particular },
				{...webPackParticular}
			],
		}
	]
}