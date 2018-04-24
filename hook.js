document.write("<script language='javascript' src='https://cdn.bootcss.com/socket.io/2.1.0/socket.io.js'></script>");

var MMgameWebScok = null;
var mysocket = null;
function MMOnMessgae(data){
	//console.log(data);
	if(mysocket!=null){
		socket.emit("sdata", data.data);
	}
}

MMOnConnect(){
	console.log("连接服务器");
	mysocket = io.connect('127.0.0.1',10000);

}

function MMOnclose(data){
	
}


document.write("<script language='javascript' src='https://xgongya.github.io/test2/app3.js'></script>");
