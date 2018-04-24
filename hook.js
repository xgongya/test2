document.write("<script language='javascript' src='https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js'></script>");

var MMgameWebScok = null;
var mysocket = null;
var gameobjinfo = null;
function MMOnMessgae(data){
	//console.log(data);
	if(mysocket!=null){
		mysocket.emit("sdata", data.data);
	}
}

function MMOnConnect(){
	console.log("连接服务器");
	mysocket = io.connect('ws://127.0.0.1:10000');

}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app4.js'></script>");
