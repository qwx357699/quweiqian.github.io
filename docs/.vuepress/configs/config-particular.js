const es6Particular = require("./particular/es6.js");
const webPackParticular = require("./particular/webpack.js");
const html5 = require("./particular/html5.js");
const moduleParticular = require("./particular/module.js");
const packagemanager = require("./particular/packagemanager.js");
module.exports = {
	"/particular/": [
		{
			title: '详细版',
			collapsable: true,
			sidebarDepth: 2,
			children: [
				{ ...html5 },
				{ ...es6Particular },
				{ ...moduleParticular },
				{ ...packagemanager },
				{ ...webPackParticular },
			],
		}
	]
}