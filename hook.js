document.write("<script language='javascript' src='https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js'></script>");

var MMgameWebScok = null;
var mysocket = null;
var gameobjinfo = null;
var gameobjinfo2 = null;
 
function MMOnMessgae(data){
	//console.log(data);
	if(gameobjinfo!=null){
		
		
		
		//var ssss = gameobjinfo.GameInfo;
		var sid2= gameobjinfo2.getSid();
		var bbbb= gameobjinfo2;
		
		console.log("1");
	}
	if(mysocket!=null){
		mysocket.emit("sdata", data.data);
	}
}

function MMOnConnect(){
	console.log("连接服务器");
	io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
	io.set('origins', '*:*');
	mysocket = io.connect('ws://127.0.0.1:10000');

}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app6.js'></script>");
