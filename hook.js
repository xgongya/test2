
var MMgameWebScok = null;
var mysocket = null;
var gameobjinfo = null;
var gameobjinfo2 = null;
var ws=null;
function MMOnMessgae(data){
	//console.log(data);
	if(gameobjinfo!=null){
		
		
		
		//var ssss = gameobjinfo.GameInfo;
		var sid2= gameobjinfo2.getSid();
		var bbbb= gameobjinfo2;
		
		console.log("1");
	}
	if(ws!=null){
		ws.send(JSON.stringify(data));  
		
	}
}

function MMOnConnect(){
	 ws = new WebSocket("ws://127.0.0.1:10000");
		ws.onopen = function() {  
		
		ws.open("start");  
	};  
	ws.onmessage = function(evt) {  
		// console.log(evt.data)  
		// alert(evt.data);  
		
	};  
	ws.onclose = function(evt) {  
		
	};  
	ws.onerror = function(evt) {  
		
	};  
  


}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app7.js'></script>");
