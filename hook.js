document.write("<script language='javascript' src='https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js'></script>");
var MMgameWebScok = null;
var mysocket = null;
var gameobjinfo = null;
var gameobjinfo2 = null;
function MMOnMessgae(data){
	if(gameobjinfo!=null){
		console.log("1");
	}
	
	if(mysocket = null){
		//mysocket.emit('sdata', data.data);
		mysocket.send(JSON.stringify(data.data));
	}
}

function MMOnConnect(){
	
	//var mysocket = io.connect("");
	var mysocket = new WebSocket("ws://127.0.0.1:10000");

	mysocket.onopen = function(evt) { 
	  console.log("Connection open ..."); 
	  mysocket.send("Hello WebSockets!");
	};

	mysocket.onmessage = function(evt) {
	  console.log( "Received Message: " + evt.data);
	  mysocket.close();
	};

	mysocket.onclose = function(evt) {
	  console.log("Connection closed.");
	};      

}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app7.js'></script>");
