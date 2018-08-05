var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });
                                                   
ros.on('connection', function() {console.log('websocket: connected');});
ros.on('error', function(error) {console.log('websocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed');});

var ls = new ROSLIB.Topic({
        ros : ros,
        name : '/cv_camera/image_raw',
        messageType : 'sensor_msgs/Image'
});

ls.subscribe(function(message) {
        str = JSON.stringify(message);
        document.getElementById("camera").innerHTML = str;
        console.log(str);                       
});
