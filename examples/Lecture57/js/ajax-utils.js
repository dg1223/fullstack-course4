(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
// This function checks what type of HTTP 
// object is available to us
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (window.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
// Send a GET request to the server
ajaxUtils.sendGetRequest = 
  // After the server responds, the 
  // responseHandler function handles the result 
  // of what the server returns

  // This is wrapped as a function so that 
  // sendGetRequest can be called aynchronously 
  // and we can avoid race condition
  function(requestUrl, responseHandler) {
    // getRequestObject gets the new XMLHttpRequest()
    // object 
    var request = getRequestObject();
    // onreadystatechange is the different stages in 
    // the n/w communication between the server and 
    // the browser
    request.onreadystatechange = 
      // When the server gets back with a response, 
      // this function gets called every time there 
      // is a change in communication state including
      // the one that's the final response
      function() { 
        handleResponse(request, responseHandler); 
      };
    // set to true to make this request asynchronous
    request.open("GET", requestUrl, true);
    // execute the request and send it to the server
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error

// request & responseHandler function parameters are 
// provided by the user
function handleResponse(request,
                        responseHandler) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {
    // this is the response of the server that we 
    // are collecting by using the responseHandler 
    // function that the user of the Ajax library 
    // is providing us
    responseHandler(request);
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

