# ロボットシステム学
## robosys2018



### ルンバをROS化するまでの流れ
参考文献　https://karaage.hatenadiary.jp/entry/2017/05/12/073000
```
$ cd ~/catkin_ws/src
$ git clone https://github.com/AutonomyLab/create_autonomy.git
$ cd ..
$ catkin_make
```
* 動作確認
ルンバをONにしてから、以下の実行してください
```
$ roslaunch ca_driver create_2.launch
[ INFO] [1533471233.535465295]: [CREATE] Connection established.
[ INFO] [1533471233.535645399]: [CREATE] Battery level 99.37 %
[ INFO] [1533471234.034841545]: [CREATE] Ready.
```
通信できているかの確認

```
$ rostopic list
/battery/capacity
/battery/charge
/battery/charge_ratio
/battery/charging_state
/battery/current
/battery/temperature
/battery/voltage
/bumper
/check_led
/clean_button
...etc
```
ルンバの情報が表示ができていたらOK

### カメラ画像をインターネットに表示する
* インストール
```
$ sudo apt install ros-kinetic-cv-bridge
$ sudo apt install ros-kinetic-cv-camera
$ sudo apt install ros-kinetic-image-transport-plugins
```
* 動作確認
```
$ rosrun cv_camera cv_camera_node
$ rosrun mjpeg_server mjpeg_server _port:=10000
```
検索する
http://自分のIPアドレス:10000/stream?topic=/cv_camera/image_raw

