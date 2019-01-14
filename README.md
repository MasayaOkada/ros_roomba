# ロボットシステム学
## robosys2018  16C1029 岡田 眞也
## 内容
課題内容　ROSでなにかつくる
* roombaとWEBカメラを使用して、移動できる監視カメラをつくる
* 目的　rosのプログラムとwebプログラムの理解

動画URL：https://youtu.be/6hiJEvkPg18

* 動作
```
$ roslaunch ca_driver create_2.launch               # ルンバ起動
$ roslaunch ros_irobot web_camera.launch            # WEBcameraをブラウザに表示
```
* 動画の閲覧
http://<自分のアドレス>:8000

* ルンバの操作
```
$ rosrun ros_irobot cmd.key.py                      # ルンバをキーボードで操作
<f: forward, b: backward, l: left, r: right >       # 動作の選択
```

## 使用するもの
* roomba 500シリーズ
* C270 HD WEBCAMERA (Logicool)
### ルンバをROS化するまでの流れ
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

### 参考文献
 * [小倉: ROSではじめるロボットプログラミング, 工学社, 2015.](https://www.kohgakusha.co.jp/books/detail/978-4-7775-1901-9)
 * [上田: Raspberry Piで学ぶ　ROSロボット入門, 日経BP, 2017.](http://ec.nikkeibp.co.jp/item/books/261040.html)
 * https://karaage.hatenadiary.jp/entry/2017/05/12/073000
