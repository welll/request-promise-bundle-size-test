//import rp from 'request-promise'
var rp = eval(`require('request-promise')`)

function calledOnlyAtServerSide(){
  rp('http://www.google.com')
    .then(function (htmlString) {
      // Process html...
    }).catch(function (err) {
      // Crawling failed...
    });
}

function calledAtClientSide(){
   return 3+5
}
