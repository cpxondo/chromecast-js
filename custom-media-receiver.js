var util = require('util');
var DefaultMediaReceiver  = require('castv2-client').DefaultMediaReceiver;

var CustomMediaReceiver = function()  {
	DefaultMediaReceiver.apply(this, arguments);
};
CustomMediaReceiver.APP_ID = '8E62F623';

util.inherits(CustomMediaReceiver, DefaultMediaReceiver);

module.exports = CustomMediaReceiver;
