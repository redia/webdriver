// init WebdriverIO
var client = require('webdriverio').remote({desiredCapabilities:{browserName: 'chrome'}});
// init WebdriverCSS
require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'my-shots',
    failedComparisonsRoot: 'diffs'
});

client
	.init()
    .url('http://pyra.cc/#/about')
	.webdrivercss('startpage', {
				   name: 'body'
				   
	})			
	.end();

