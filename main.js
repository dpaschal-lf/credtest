


var ajaxOptions = {
  dataType: 'json',
  method: 'get',
  cache: false,
  url: 'http://s-apis.learningfuze.com/sgt/get',
  data: {
    api_key: API_KEY,
  },
  success: function(data){
    console.log('got data: ',data);
  },
  error: errorHandler
}


function errorHandler(){
  console.log('got error');
}

$.ajax(ajaxOptions)