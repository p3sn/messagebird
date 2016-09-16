
var message;
var accesskey;

function messagebird_send (message) {
	
	var url = 'https://rest.messagebird.com/messages?_method=POST&access_key=' + accesskey;
	var params = {
	  'originator': 'Sender Name',
	  'recipients': [ '31612345678' ],
	  'body': message
	};
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("POST", url, false );
    xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4) {
			// do nothing
	    }
	}
	xmlHttp.send( JSON.stringify(params) );
}