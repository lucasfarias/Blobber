(function() {
  var oldLog = console.log;
  console.log = function(message){
    outputText.innerHTML += (message + '\n');
    oldLog.apply(console, arguments);
  };
})();

var dataSet = {
  "Default Android LB" : ["carrier", "clver", "devmod", "errorcode", "errorstring", "esn", "event_utc_ms", "netspec", "nettype", "platformType", "platformVersion", "uiver", "via", "xid" ],
  "A.R.G.U.S. Device LB" : []


}


function submitCode(){
  var code = editor.getValue();
  editor.setValue(JSON.stringify(JSON.parse(code), null, 2));
  editor.gotoLine(1);
  $('.ace_content').animate({marginLeft: "0px"});
}  