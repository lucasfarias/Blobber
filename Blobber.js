(function() {
  var oldLog = console.log;
  console.log = function(message){
    outputText.innerHTML += (message + '\n');
    oldLog.apply(console, arguments);
  };
})();

var dataSet = {
  default : {
      1 : "carrier",
      2 : "errorcode"
  }
}


function submitCode(){
  var code = editor.getValue();
  editor.setValue(JSON.stringify(JSON.parse(code), null, 2));
  editor.gotoLine(1);
  $('.ace_content').animate({marginLeft: "0px"});
}  