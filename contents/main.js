var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });
                                                   
ros.on('connection', function() {console.log('websocket: connected'); });
ros.on('error', function(error) {console.log('websocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed');});

//document.getElementById('camstream').data = 'http://'
$('#camstream').attr('data', 'http://'
        + location.hostname
        + ':10000/stream?topic=/cv_camera_node/image_raw');
