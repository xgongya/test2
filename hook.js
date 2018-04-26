var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 10000, //监听接口
        verifyClient: socketVerify //可选，验证连接函数
    });

function socketVerify(info) {
    console.log(info.origin);
    console.log(info.req.t);
    console.log(info.secure);
    return true; //否则拒绝

}

wss.broadcast = function broadcast(s,ws) {

};

wss.on('connection', function(ws) {
	
    ws.on('message', function(jsonStr,flags) {
		console.log(jsonStr);
    });
  
    ws.on('close', function(close) {
        try{
        	//wss.broadcast(0,this.user.name);
        }catch(e){
        	console.log('刷新页面了');
        }
    });
});
