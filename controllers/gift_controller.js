
const request = require('ajax-request');

request('url', function(err, res, body) {});
 
request({
  url: '',
  method: 'GET',
  data: {
    query1: 'value1'
  }
}, function(err, res, body) {
  
});


function grouponItems(category, count, callback){
	var url='https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&filters=category:'+category+'&offset=0&limit='+count
	console.log(url)
	request({
	  url:url
	}, function(err, res, body) {
		var x= JSON.parse(body)
		console.log(x.deals);
	  var respond=[];
	  for(var i=0; i<x["deals"].length;i++){
	  	respond.push({dealurl: x.deals[i].dealUrl, image: x.deals[i].smallImageUrl});
	  }
	  callback(respond);
	});



}

module.exports.getItems=grouponItems;