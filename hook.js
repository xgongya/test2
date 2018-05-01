//document.write("<script language='javascript' src='https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js'></script>");
var MMgameWebScok = null;
var mysocket = null;
var gameobjinfo = null;
var gameobjinfo2 = null;
//new f6nkPjHAyej.LiveGame
var LiveGame1 = null;
var LiveGame2 = null;
var LiveGame3 = null;
var LiveGame4 = null;
var LiveGame5 = null;
var LiveGame6 = null;
var LiveGame7 = null;
var LiveGame8 = null;
var LiveGame9 = null;
var LiveGame10 = null;
var LiveGame11 = null;
var LiveGame12 = null;
var LiveGame13 = null;
var LiveGame14 = null;

myHallInfo = null;

function MMOnMessgae(data){
	if(gameobjinfo!=null){
		console.log("1");
	}
	
	if(mysocket != null){
		//mysocket.emit('sdata', data.data);
		mysocket.send(JSON.stringify(data.data));
	}
}

function MMOnConnect(){
	
	//var mysocket = io.connect("");
	mysocket = new WebSocket("wss://127.0.0.1:10000");

	mysocket.onopen = function(evt) { 
	  
	};

	mysocket.onmessage = function(evt) {
	
	  mysocket.close();
	};

	mysocket.onclose = function(evt) {
	  console.log("Connection closed.");
	};      

}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app7.js'></script>");
